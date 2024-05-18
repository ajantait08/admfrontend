// ** React Imports
import { useState, Fragment , useEffect } from 'react'

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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// ** Third Party Imports
import * as yup from 'yup'
import { useForm , Controller } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import {useUserDashboard} from 'src/hooks/useUserDashboard'
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
  [theme.breakpoints.up('sm')]: { width: '30rem' }
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

// const ReCAPTCHANew = styled(ReCAPTCHA)(({ theme }) => ({
//   [theme.breakpoints.down('xl')]: {
//     width: '100%'
//   },
//   [theme.breakpoints.down('md')]: {
//     width: '100%'
//   },
//   [theme.breakpoints.down('sx')]: {
//     width: 600
//   }
// }))

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

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  marginBottom: 4,
  [theme.breakpoints.down('md')] : { margin: '0px 0px 0px -21px !important' ,transform : 'scale(0.7,0.8)'},
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
  const [containerWidth , setContainerWidth] = useState('');
  const [captchaStyle , setCaptchaStyle] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isDisplayError , setIsDisplayError] = useState(false);
  const [isDisplayErrorMsg , setIsDisplayErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const [date, setDate] = useState(new Date())
  const [studentName, setStudentName] = useState()
  const [backdropOpen , setBackdropOpen] = useState(false);

  // ** Hooks
  const auth = useAuth()
  const userDashboard = useUserDashboard()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isXl = useMediaQuery(theme.breakpoints.down('xl'));

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
      registration_no : '',
      password : '',
      google_captcha : '',
      showPassword : 'text'

    });

    const [errors , setErrors] = useState({
      registration_no : '',
      password : '',
      google_captcha : ''
    });



    const onhandleChangeName  = prop => event => {
      //   console.log(event.target.value)
      setStudentName({ ...values, [prop]: event.target.value })
  }
  console.log('values here :');
  console.log(values);


    // ** State
  const [basicPicker, setBasicPicker] = useState(new Date()) // set date to baseicpicker


  // ** Hook
  const { i18n } = useTranslation()

    // ** Hooks
  const sitekey = '6LclBM8pAAAAADWnVP_qvTK6X_SpW9zKePWamBPW'

  const isAlphanumeric = (str) => {
    return /^[a-zA-Z0-9./]+$/.test(str);
}

  const handleChangeFormData =  prop => (event) => {
    setValues({ ...values, [prop]: event.target.value })
    if(prop === 'registration_no'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Registration No. is Required'})
        setIsButtonDisabled(true)
      }
      else if(!isAlphanumeric(event.target.value)){
        setErrors({...errors , [prop] : 'Registration No. Should Only be Alphanumeric'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.password != ''){
          if(errors.password == ''){
            console.log('No errors are Found')
            setIsButtonDisabled(false)
          }
        }
      }
    }
    if(prop === 'password'){
        if(event.target.value === ''){
          setErrors({...errors , [prop] : 'Password is Required'})
          setIsButtonDisabled(true)
        }
        if(!isAlphanumeric(event.target.value)){
          setErrors({...errors , [prop] : 'Password Should Only be Alphanumeric'})
          setIsButtonDisabled(true)
        }
        else{
        setErrors({...errors , [prop] : ''})
        if(values.registration_no != ''){
          if(errors.registration_no == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }
  }

  useEffect(() => {
    if(isXs){
      console.log('xs')
      setCaptchaStyle(true)
      }
      else if(isSm){
        console.log('sm')
      setCaptchaStyle(true)
      }
      else if(isMd){
        console.log('md')
      setCaptchaStyle(true)
      }
      else if(isLg){
        console.log('lg')
      setCaptchaStyle(false)
      }
      else if(isXl){
        console.log('xl')
      setCaptchaStyle(false)
      }
      else{
      }

  }, [containerWidth]); // Listen for changes in the md breakpoint


  const handleSubmit = (event) => {

    event.preventDefault();
    setIsButtonDisabled(true)
    setBackdropOpen(true);

    var registration_no = values.registration_no;
    var password = values.password;
    var google_captcha = values.google_captcha;

      var datanew = {
        registration_no : registration_no,
        password: password,
        google_captcha: google_captcha
      }

      auth.loginUser({datanew},(response) => {
      if(response.status === 3)
      {
        //setLoading(false);

        if(response.msg.message === 'validation failed')
          {
             setBackdropOpen(false);
             const errorFields = Object.keys(response.msg.error);
             errorFields.map(fieldName => {
             console.log(response.msg.error[fieldName])
             const fieldErrors = response.msg.error[fieldName];
             setErrors(errors => ({
               ...errors,
               [fieldName]: (
                 <>
                 {fieldErrors.map((error, index) => (
                   <Fragment key={index}>
                     {index > 0 && <br />}
                     {error}
                   </Fragment>
                 ))}
               </>
               )
             }));
             });
             setIsButtonDisabled(true)
          }
          else if(response.msg.message === 'Registration Details Not Found' || response.msg.message === 'Email Not Verified' || response.msg.message === 'Invalid login credentials' || response.msg.message === 'login failed'){
            //setLoading(false);
            setBackdropOpen(false);
            setIsDisplayError(true);
            setIsDisplayErrorMsg(response.msg.error);
            setValues({
              registration_no : '',
              password : ''
            });
            setIsButtonDisabled(true);
          }
          else{

          }
      }
      else{
        //userDashboard.
      }
      });
    }

  return (

    <>

     <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <Typography variant='h5' sx={{ color: 'wheat' , fontWeight: 800 , textAlign:'center'}}>&nbsp;&nbsp;
        <CircularProgress sx={{ color: 'wheat'}}
        />
        <br />
        Please wait while processing Login Details...</Typography>
      </Backdrop>

    <Grid container spacing={4} >
  <Grid item xs={12} md={4} sx={{ alignSelf: 'flex-start' }}>
</Grid>
<Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }}>
    <Card sx={{ zIndex: 1 }}>
      <CardContent sx={{backgroundColor:'#849fa7',padding : '8px !important'}}>
     <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper',
            padding : '8px'
          }}
        >
          <BoxWrapper>
            <Box sx={{ mb: 6}}>
              <TypographyStyled variant='h5'>Welcome to {themeConfig.templateName}! 👋🏻</TypographyStyled>
              <Typography variant='body2' sx={{fontWeight:'bold'}}>Please sign-in to your account and start the adventure</Typography>
            </Box>
            {isDisplayError ? <Alert severity='error' sx={{margin: theme.spacing(10)}}>{isDisplayErrorMsg ? isDisplayErrorMsg : 'Sorry Some Error occurred , please contact admin !'}</Alert> : ''}
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Registration No.<span style={{ color : 'red'}}>*</span></Typography>
                name='registration_no'
                placeholder='Enter Registration No.'
                value={values.registration_no}
                onChange={handleChangeFormData('registration_no')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.registration_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.registration_no}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <InputLabel htmlFor='auth-login-v2-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='auth-login-v2-password'
                  onChange={handleChangeFormData('password')}
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


              <FormControlStyled fullWidth>
              <ReCAPTCHA sitekey={sitekey} value={values.google_captcha}
              onChange={handleChangeFormData('google_captcha')}
              error={Boolean(errors.google_captcha)} />
              {errors.google_captcha && <FormHelperText sx={{ color: 'error.main' }}>{errors.google_captcha.message}</FormHelperText>}
              {errorList.google_captcha && <FormHelperText sx={{ color: 'error.main' }}>{errorList.google_captcha[0]}</FormHelperText>}
              </FormControlStyled>


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

              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' , marginTop: '-21px' }}>
              <Typography variant='body2' sx={{fontWeight:'bold'}}>
                 <Link passHref href='/pages/auth/forgot-password-v2'>
                  <LinkStyled>Forgot Password&nbsp;? &nbsp;&nbsp;<IconButton
                            edge='start'
                            onMouseDown={e => e.preventDefault()}
                          >
                            <Icon icon='mdi:lock-reset' fontSize='inherit' />
                          </IconButton></LinkStyled>
                </Link>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>

                <Typography variant='body2' sx={{fontWeight:'bold'}}>
                 Don't have an account&nbsp;&nbsp;
                  <IconButton
                            edge='start'
                            onMouseDown={e => e.preventDefault()}
                          >
                            <Icon icon='ph:question-bold' fontSize='inherit' />
                          </IconButton>
                </Typography>
                <Typography variant='body2' sx={{fontWeight:'bold'}}>
                  <Link passHref href='/admission/phd/adm_phd_registration'>
                    <LinkStyled>Sign Up</LinkStyled>
                  </Link>
                </Typography>
              </Box>
            </form>
          </BoxWrapper>
        </Box>
   </CardContent>
    </Card>
    </Grid>
    </Grid>
    <FooterIllustrationsV1 />
    </>
  )
}

LoginV1.guestGuard = true
LoginV1.getlayout = page => <UserLayout>{page}</UserLayout>

export default LoginV1
