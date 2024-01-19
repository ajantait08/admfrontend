// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CardWelcomeBack from 'src/views/ui/cards/gamification/CardWelcomeBack'
import TabsNav from 'src/views/components/tabs/TabsNav'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import MuiTabList from '@mui/lab/TabList'
import UserLayout from 'src/layouts/UserLayout'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import useMediaQuery from '@mui/material/useMediaQuery'
import FormHelperText from '@mui/material/FormHelperText'
import toast from 'react-hot-toast'
import { NotificationManager } from 'react-notifications';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReCAPTCHA from 'react-google-recaptcha'
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm , Controller } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'



// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
// ** Third Party Imports
// import DatePicker from 'react-datepicker'
// import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from '@mui/lab/DatePicker'
// import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'
import {format} from 'date-fns'


// ** Custom Component Imports
import CustomInput from 'src/views/forms/form-elements/pickers/react-datepicker/PickersCustomInput'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
//import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'
import { NoteMultiple } from 'mdi-material-ui'


// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '34rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const TabList = styled(MuiTabList)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 38,
    minWidth: 130,
    borderRadius: theme.shape.borderRadius
  }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { mt: theme.spacing(8) }
}))

const SidebarComponent = () => {
  <Box sx={{ px:4 , py : 2 , height : 'calc(100vh - 12 rem)', backgroundColor: 'background.paper' }}>
    <h1>Sidebar</h1>
  </Box>
}
const langObj = { fr, ar, en }

const LoginV1 = () => {
  // ** States


  const [toggleResult , setToggleResult]  = useState(null);
  const [isAdmnNo , setIsAdmnNo] = useState(true);
  const [isEmail , setIsEmail] = useState(false);
  const [isMobile , setIsMobile] = useState(false);
  const [isAadharNumber , setIsAadharNumber] = useState(false);
  const [isdummyname , setdummyname] = useState('ajanta');
  const [newValue , setnewvalue] = useState('');
  const [errorList, setErrorList] = useState([]);

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  //const [value, setValue] = useState('1')

  const handleChangeTab = (event,newValue) =>{
    setValue(newValue);
  }

  const handleChangeDateOfBirth = (event) => {
    //   console.log(event.target.value)
    set(event.target.value)
}


    const [values, setValues] = useState({
      salutation : '',
      first_name : '',
      middle_name : '',

    });

    const [errors , setErrors] = useState({
      salutation : '',
      first_name : '',
      middle_name : '',

    });

    const [showPassword, setShowPassword] = useState(false)
    const [date, setDate] = useState(new Date())
    const [studentName, setStudentName] = useState()

    const onhandleChangeName  = prop => event => {
      //   console.log(event.target.value)
      setStudentName({ ...values, [prop]: event.target.value })
  }


    // ** State
  const [basicPicker, setBasicPicker] = useState(new Date()) // set date to baseicpicker


  // ** Hook
  const { i18n } = useTranslation()

    // ** Hooks
  const sitekey = '6Lf8isYkAAAAAAElKsix4YfzNkQUXWkIBK0CZbfi'

  const handleChangeFormData =  prop => (event) => {
    setValues({ ...values, [prop]: event.target.value })
    if(prop === 'first_name'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'First Name is Required'})
        setIsButtonDisabled(true)
      }
      else if(!isAlphanumeric(event.target.value)){
        setErrors({...errors , [prop] : 'First Name Should Only be Alphanumeric'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.category != '' && values.salutation != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != ''){
          if(errors.middle_name == '' && errors.salutation == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            console.log('No errors are Found')
            setIsButtonDisabled(false)
          }
        }
      }
    }
    if(prop === 'middle_name'){
      // if(event.target.value === ''){
      //   setErrors({...errors , [prop] : 'Middle Name is Required'})
      //   setIsButtonDisabled(true)
      // }
        if(!isAlphanumeric_middle_last(event.target.value)){
          setErrors({...errors , [prop] : 'Middle Name Should Only be Alphanumeric'})
          setIsButtonDisabled(true)
        }
        else{
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.salutation != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != ''){
          if(errors.first_name == '' && errors.last_name == '' && errors.category == '' && errors.salutation == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }
  }

  const onSubmit = (data,e) => {
    e.preventDefault();
    console.log(data);
    const { admn_no , student_name_new, programme_name_new,  email , mobile_no, google_captcha} = data

      const datanew = {
        mobile_no : mobile_no,
        email: email,
        admn_no: admn_no,
        student_name : student_name_new,
        programme_name : programme_name_new,
        google_captcha: google_captcha
      }

      auth.loginUser({datanew},(response) => {
      if(response.status === 3)
      {
        setErrorList(response.msg.response.data.message);
      }
      });
  }

  const handleSubmit = (e) => {
       e.preventDefault();
    }



  const onClick = data => {


    auth.checkLoginAdmnNo({ data }, (response) => {

      // console.log(auth.admnNoMsg.data.data.date_of_birth);
       if(response.status === 1)
       {
        console.log('initial_msg'+response.msg);
        setToggleResult(response.msg);
        setValue('isStudentName',true,{shouldDirty:true});
        setValue('isProgrammeName',true,{shouldDirty:true});
        setErrorList([])
       }
       else if(response.status === 2)
       {
        setToggleResult(response.msg);
        setErrorList([])
       }
       else{
        setErrorList(response.msg.response.data.message);
        setToggleResult(null);
       }
    })
  }
  return (
    <Box className='content-center'>
    <Grid container spacing={4} >
  <Grid item xs={12} md={4} sx={{ alignSelf: 'flex-start' }}>
</Grid>
<Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }}>
    <Card sx={{ zIndex: 1 }}>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` , backgroundColor:'#849fa7'}}>
        <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
 <Card>
     <CardContent>
     <Box
          sx={{
            p: 12,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h5'>Welcome to {themeConfig.templateName}! 👋🏻</TypographyStyled>
              <Typography variant='body2'>Please sign-in to your account and start the adventure</Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Email<span style={{ color : 'red'}}>*</span></Typography>
                name='email'
                placeholder='Enter Email'
                value={values.email}
                onChange={handleChangeFormData('email')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:email-edit' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <InputLabel htmlFor='auth-login-v2-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='auth-login-v2-password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && <FormHelperText sx={{ color: 'error.main' }}>{errors.password}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <ReCAPTCHA sitekey={sitekey} value={values.google_captcha}
              onChange={handleChangeFormData('google_captcha')}
              error={Boolean(errors.google_captcha)} />
              {errors.google_captcha && <FormHelperText sx={{ color: 'error.main' }}>{errors.google_captcha.message}</FormHelperText>}
              {errorList.google_captcha && <FormHelperText sx={{ color: 'error.main' }}>{errorList.google_captcha[0]}</FormHelperText>}
              </FormControl>
              <Box
                sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
              >
                {/* <FormControlLabel control={<Checkbox />} label='Remember Me' /> */}
                {/* <Link passHref href='/pages/auth/forgot-password-v2'>
                  <LinkStyled>Forgot Password?</LinkStyled>
                </Link> */}
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
                Login
              </Button>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography variant='body2' sx={{ mr: 2 }}>
                  New on our platform?
                </Typography>
                <Typography variant='body2'>
                  <Link passHref href='/pages/auth/register-v2'>
                    <LinkStyled>Create an account</LinkStyled>
                  </Link>
                </Typography>
              </Box>
              <Divider sx={{ my: 5 }}>or</Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Facebook sx={{ color: '#497ce2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Twitter sx={{ color: '#1da1f2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Github
                      sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
                    />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Google sx={{ color: '#db4437' }} />
                  </IconButton>
                </Link>
              </Box>
            </form>
          </BoxWrapper>
        </Box>
      </CardContent>
    </Card>
    </Box>
   </CardContent>
    </Card>
    </Grid>
    </Grid>
    <FooterIllustrationsV1 />
  </Box>
  )
}

LoginV1.guestGuard = true
LoginV1.getlayout = page => <UserLayout>{page}</UserLayout>

export default LoginV1
