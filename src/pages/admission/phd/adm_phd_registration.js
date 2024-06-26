// ** React Imports
import { useState, Fragment , forwardRef } from 'react'

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
import Icon from 'src/@core/components/icon'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import CardStatisticsCharacters from 'src/views/ui/cards/statistics/CardStatisticsCharacters'
import useMediaQuery from '@mui/material/useMediaQuery'
import FormHelperText from '@mui/material/FormHelperText'
import toast from 'react-hot-toast'
import { NotificationManager } from 'react-notifications';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import Alert from '@mui/material/Alert'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router'

//import FormControlLabel from '@mui/material/FormControlLabel'


// ** Third Party Imports
import * as yup from 'yup'
import { useForm , Controller } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import { useEmailVerify } from 'src/hooks/useEmailVerify'
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
//import DatePicker from '@mui/lab/DatePicker'

import DatePicker from 'react-datepicker'

// import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'
import {format} from 'date-fns'

import axios from 'axios'
//import CustomChip from 'src/@core/components/mui/chip'


// ** Custom Component Imports
//import CustomInput from 'src/views/forms/form-elements/pickers/react-datepicker/PickersCustomInput'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
//import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'
import { NoteMultiple } from 'mdi-material-ui'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'


import 'react-datepicker/dist/react-datepicker.css'


// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  //[theme.breakpoints.up('sm')]: { width: '34rem' }
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

  const ButtonNew = styled(Button)(({theme}) => ({

        '& .MuiButton-root' : {
        backgroundColor: `${theme.palette.common.phd_admission_dark} !important`
    }

  }))


const Img = styled('img')({
    right: 7,
    bottom: 0,
    height: 177,
    position: 'absolute'
  })

  const StyledBox = styled(Box)(({ theme }) => ({
    padding: 15,
    backgroundColor: '#d9edf7',
    borderRadius: 5,
    borderColor: '#bce8f1',
    mb: 4 ,
    display: 'flex',
    justifyContent: 'center'
  }))

const SidebarComponent = () => {
  <Box sx={{ px:4 , py : 2 , height : 'calc(100vh - 12 rem)', backgroundColor: 'background.paper' }}>
    <h1>Sidebar</h1>
  </Box>
}
const langObj = { fr, ar, en }

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const category = [
  'General',
  'SC',
  'ST',
  'OBC',
  'EWS'
]

const pwd = [
    'Yes',
    'No'
]

const gender = [
    'Male',
    'Female',
    'Transgender'
]

const blood_group = [
   'A+',
   'A-',
   'B+',
   'B-',
   'O+',
   'O-',
   'AB+',
   'AB-'
]

const salutation = [
   'Mr.',
   'Mrs.',
   'Miss',
   'Prof.',
   'Dr.'
]


const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref}  InputProps={{
    startAdornment: (
      <InputAdornment position='start'>
        <Icon icon='uim:calender' style={{ width: '20px', height: '20px' }} />
      </InputAdornment>
    )
  }}
   label=<Typography>Birth Date&nbsp;<span style={{ color : 'red'}}>*</span></Typography>
   autoComplete='off' />
})


const AdmPhdReg = () => {


  // ** States
  const [values, setValues] = useState({
      salutation : '',
      first_name : '',
      middle_name : '',
      last_name : '',
      category : '',
      colorblindness : '',
      mobile : '',
      father_name : '',
      blood_group : '',
      email : '',
      pwd : '',
      gender : '',
      dob : ''
  })

  const [errors , setErrors] = useState({
    salutation : '',
    first_name : '',
    middle_name : '',
    last_name : '',
    category: '',
    colorblindness : '',
    mobile:'',
    father_name : '',
    blood_group : '',
    email : '',
    pwd : '',
    gender : '',
    dob : ''
  })

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [isDisplayError , setIsDisplayError] = useState(false);
  const [isRegSuccussMsg , setIsRegSuccussMsg] = useState(false);
  const [reg_no , setRegNo] = useState(false);
  const [loading, setLoading] = useState(false)

  const [isDisplayErrorMsg , setIsDisplayErrorMsg] = useState('');
  const [backdropOpen , setBackdropOpen] = useState(false);
  const router = useRouter();

  // ** Hooks
  const auth = useAuth()
  const EmailVerify = useEmailVerify()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

//   const handleChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value })
//   }


  const schema = yup.object().shape({
    mobile_no: yup.string().required(),
    email: yup.string().required(),
    admn_no: yup.string().required(),
  })

  const defaultValues = {
    mobile_no:'',
    email : '',
    admn_no : '',
    recaptcha_token : false
    }

    console.log(EmailVerify.verifyEmailMsg);

  const isAlphanumeric = (str) => {
      return /^[a-zA-Z0-9./]+$/.test(str);
  }

  const isAlphanumeric_middle_last = (str) => {
    return /^[a-zA-Z0-9./]*$/.test(str);
}

  const isAlphanumeric_father = (str) => {
    return /^[a-zA-Z0-9 ./]*$/.test(str);
}

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function containsExactlyTenDigits(inputString) {
    return /^\d{10}$/.test(inputString);
  }

  function isDateFormatValid(dateString) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(dateString);
  }

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    if(year < '1970'){
     return false
    }
    else{
     return true
    }

  }

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

    if(prop === 'last_name'){
      // if(event.target.value === ''){
      //   setErrors({...errors , [prop] : 'Last Name is Required'})
      //   setIsButtonDisabled(true)
      // }
      if(!isAlphanumeric_middle_last(event.target.value)){
        setErrors({...errors , [prop] : 'Last Name Should Only be Alphanumeric'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.salutation != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.category == '' && errors.salutation == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'father_name'){
      // if(event.target.value === ''){
      //   setErrors({...errors , [prop] : 'Father Name is Required'})
      //   setIsButtonDisabled(true)
      // }
      if(!isAlphanumeric_father(event.target.value)){
        setErrors({...errors , [prop] : 'Father Name Should Only be Alphanumeric'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.salutation != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.salutation == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'email'){

      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Email is Required'})
        setIsButtonDisabled(true)
      }
      else if(!isValidEmail(event.target.value)){
        setErrors({...errors , [prop] : 'Not a valid email address'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.salutation != '' && values.mobile != '' && values.blood_group != '' && values.pwd != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.salutation == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'mobile'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Mobile No. is required'})
        setIsButtonDisabled(true)
      }
      // else if(!containsExactlyTenDigits(event.target.value)){
      //   setErrors({...errors , [prop] : 'Mobile Number Should only contain 10 digits'})
      //   setIsButtonDisabled(true)
      // }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.salutation != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.salutation == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'category'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of Category is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.salutation != '' && values.email != '' && values.pwd != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.colorblindness == '' && errors.salutation == '' &&  errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'salutation'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of Salutation is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'pwd'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of PwD is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.salutation != '' && values.email != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.salutation == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'gender'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of Gender is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.salutation != '' && values.email != '' && values.pwd != '' ){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.salutation == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'blood_group'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of Blood Group is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.email != '' && values.pwd != '' && values.salutation != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.salutation == '' && errors.mobile == '' && errors.father_name == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if (prop === 'colorblindness') {
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selecting correct option for Color Blindness is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.salutation != '' && values.gender != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.mobile == '' && errors.father_name == '' && errors.salutation == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
            setIsButtonDisabled(false)
          }
        }
      }
  }

}


    // ** State
  const [basicPicker, setBasicPicker] = useState(null) // set date to baseicpicker

  const [selectedDate , setSelectedDate] = useState(new Date())

  const [open, setOpen] = useState(false)
  const handleClickOpen = (event) => {
    if(event.target.value === 'Y'){
    setOpen(true)
    }
    else{
    setOpen(false)
    }
  }
  const handleClose = () => setOpen(false)

  // ** Hook
  //const { i18n } = useTranslation()

    // ** Hooks

  //const sitekey = '6Lf8isYkAAAAAAElKsix4YfzNkQUXWkIBK0CZbfi'


  const submitHandler = (event) => {

    event.preventDefault();
    setIsButtonDisabled(true)
    setBackdropOpen(true);
    var salutation = values.salutation;
    var first_name = values.first_name;
    var middle_name = values.middle_name;
    var last_name = values.last_name;
    var pwd = values.pwd;
    var category = values.category;
    var email = values.email;
    var mobile = values.mobile;
    var gender = values.gender;
    const formattedDate = format(basicPicker, "dd-MM-yyyy");
    var father_name = values.father_name;
    var blood_group = values.blood_group;
    var colorblindness = values.colorblindness;

    var datanew  = {
     salutation : salutation,
     first_name : first_name,
     middle_name : middle_name,
     last_name : last_name,
     pwd : pwd,
     category : category,
     email : email,
     mobile : mobile,
     gender : gender,
     dob : formattedDate,
     father_name : father_name,
     blood_group : blood_group,
     colorblindness : colorblindness
    }

    auth.registerUser({ datanew }, (response) => {
     if(response.status === 3)
     {
      setBackdropOpen(false);
     if(response.msg.message === 'validation error')
     {
        const errorFields = Object.keys(response.msg.errors);
        errorFields.map(fieldName => {
        console.log(response.msg.errors[fieldName])
        const fieldErrors = response.msg.errors[fieldName];
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
     else if(response.msg.message === 'Email Already Exists' || response.msg.message === 'Mobile Already Exists'){
      setLoading(false)
      setBackdropOpen(false)
      setIsDisplayError(true)
      setIsDisplayErrorMsg(response.msg.error)
      setValues({
        salutation: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        category: '',
        colorblindness: '',
        mobile: '',
        father_name: '',
        blood_group: '',
        email: '',
        pwd: '',
        gender: '',
        dob: setBasicPicker(null)
      });
      setIsButtonDisabled(true)
     }
     }
     else {
       setBackdropOpen(false);
       setIsRegSuccussMsg(true);
       setRegNo(response.msg.registration_no)
     }
    })
    }

  const handleClickColorBlindData = (event) => {
     console.log(event.target.value)
  }

  const clickHandler = () => {
     router.replace('pages/admission/phd/adm_phd_home/');
  }

  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };
  const handleBackdropToggle = () => {
    setBackdropOpen(!backdropOpen);
  };

  return (

    <DatePickerWrapper>
       {/* <ButtonNew fullWidth size='large' onClick={handleBackdropToggle} type='submit' variant='contained' sx={{ mb: 7}}>
            Show Backdrop
          </ButtonNew> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <Typography variant='h5' sx={{ color: 'wheat' , fontWeight: 800 , textAlign:'center'}}>&nbsp;&nbsp;
        <CircularProgress sx={{ color: 'wheat'}}
        />
        <br />
        Please wait while processing Registration Details...</Typography>
      </Backdrop>
    <Box className='content-center'>
    <Grid container spacing={4} >
    <Grid item xs={12} md={2}>
    </Grid>
    {isRegSuccussMsg ?  <Grid item xs={12} md={6}>
    <Card sx={{ backgroundColor: `${theme.palette.common.phd_admission_dark}`}} >
        <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
            <Box sx={{ mb: 8, alignItems: 'center', justifyContent: 'center' }}>
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
        <Box sx={{ mb: 8 }}>
        <Card sx={{ backgroundColor: `${theme.palette.common.phd_admission}` ,overflow: 'visible', position: 'relative' }}>
      <CardContent>

      <Typography variant='h5' sx={{ color: `${theme.palette.common.phd_admission_dark}` , fontWeight: 800 , textAlign:'center'}}><u>Congratulations!!</u></Typography>

      <Typography variant='div' sx={{ color: `${theme.palette.common.phd_admission_dark}` , fontWeight: 800}}>
      <Typography variant='h6' sx={{ color: `${theme.palette.common.phd_admission_dark}` , fontWeight: 800 , padding: theme.spacing(3)}}>You are successfully registered. Please confirm the email
                                                            sent to your email-id!
                                                            <Typography variant='small' sx={{ color: '#7b6767' , fontWeight: 800 , padding: theme.spacing(2) , fontSize: 18}}>(This is the most important step to proceed.)</Typography>
     </Typography>
     <Typography variant='h6' sx={{ color: `${theme.palette.common.phd_admission_dark}` , fontWeight: 800 , padding: theme.spacing(3)}}>Your registration number is {reg_no}.
                                                            Please save it for future use.</Typography>
                                                            </Typography>

    <Typography variant='h6' sx={{ color: '#7b6767' , fontWeight: 800 , padding: theme.spacing(3)}}>NOTE : Please Remember , this is a Flash Message. Please Donot Refresh untill you have finished reading completely.</Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>Enter Your Personal Information</Typography> */}
              <form noValidate autoComplete='off' onClick={clickHandler}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonNew size='large' variant='contained' sx={{ mb: 5}}>
            GO BACK TO HOMEPAGE
          </ButtonNew>
        </div>
        </form>
      </CardContent>
      </Card>
      </Box>
      </CardContent>
      </Card>
      </Box>
      </CardContent>
      </Card>
    </Grid> :

    <Grid item xs={12} md={6}>
        <Card sx={{ backgroundColor: `${theme.palette.common.phd_admission_dark}`}} >
        <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
            <Box sx={{ mb: 8, alignItems: 'center', justifyContent: 'center' }}>
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
        <Box sx={{ mb: 8 }}>
        <Card sx={{ backgroundColor: `${theme.palette.common.phd_admission}` ,overflow: 'visible', position: 'relative' }}>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 6.5, fontWeight: 600 }}>
         Welcome to {themeConfig.templateName} !
        </Typography>
        <Box sx={{ mb: 1.5, rowGap: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Typography variant='h5' sx={{ mr: 1.5 }}>
            Registration Form &nbsp;&nbsp;
            <IconButton
                            edge='start'
                            onMouseDown={e => e.preventDefault()}
                          >
                            <Icon icon='mdi:file-document-edit' fontSize={20} />
                          </IconButton>

          </Typography>

        </Box>

        <Box sx={{ mb: 1.5, rowGap: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <Grid container spacing={4} >
        <Grid item xs={12} md={6}>
        <Typography variant='small' sx={{ mr: 1.5 , color : '#6F0E11;' }}>
            Please Fill All Details Carefully !
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Img src="/images/pages/create-deal-review-complete.png" alt="Ratings"/>
          </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
        </Box>

        {isDisplayError ? <Alert severity='error' sx={{margin: theme.spacing(10)}}>{isDisplayErrorMsg ? isDisplayErrorMsg : 'Sorry Some Error occurred , please contact admin !'}</Alert> : ''}
        <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

            <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:account-box' style={{ width: '20px', height: '20px' }} />&nbsp;Salutation<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.salutation} name='salutation' onChange={handleChangeFormData('salutation')} onBlur={handleChangeFormData('salutation')} id='grouped-native-select pwd'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { salutation.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {errors.salutation && <FormHelperText sx={{ color: 'error.main' }}>{errors.salutation}</FormHelperText>}
                </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Middle Name'
                name='middle_name'
                placeholder='Enter Middle Name'
                value={values.middle_name}
                onChange={handleChangeFormData('middle_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.middle_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.middle_name}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>


              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:trophy-award' style={{ width: '20px', height: '20px' }} />&nbsp;Divyang (PwD)<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.pwd} name='pwd' onChange={handleChangeFormData('pwd')} id='grouped-native-select pwd'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { pwd.map(value => (
                    <MenuItem value={value === 'Yes' ? 'Y' : 'N'}>{value}</MenuItem>
                    ))}
                    </Select>
                    {errors.pwd && <FormHelperText sx={{ color: 'error.main' }}>{errors.pwd}</FormHelperText>}
                </FormControl>

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
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:gender-transgender' style={{ width: '20px', height: '20px' }} />&nbsp;Gender<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More' name='gender' value={values.gender} id='grouped-native-select gender' onChange={handleChangeFormData('gender')}>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { gender.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {errors.gender && <FormHelperText sx={{ color: 'error.main' }}>{errors.gender}</FormHelperText>}
                </FormControl>

                <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Father's Name</Typography>
                name='father_name'
                placeholder='Enter Father Name'
                value={values.father_name}
                onChange={handleChangeFormData('father_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.father_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.father_name}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

             </Grid>

             <Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }} >

             <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>First Name<span style={{ color : 'red'}}>*</span></Typography>
                name='first_name'
                placeholder='Enter First Name'
                value={values.first_name}
                onChange={handleChangeFormData('first_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.first_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.first_name}</FormHelperText>}
                {/* {errorList.first_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.first_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Last Name<span style={{ color : 'red'}}>*</span></Typography>
                name='last_name'
                placeholder='Enter Last Name'
                value={values.last_name}
                onChange={handleChangeFormData('last_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.last_name}</FormHelperText>}
                {/* {errorList.first_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.first_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:shape-plus' style={{ width: '20px', height: '20px' }} />&nbsp;Category<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' name='category' value={values.category} onChange={handleChangeFormData('category')} id='grouped-native-select category'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { category.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {errors.category && <FormHelperText sx={{ color: 'error.main' }}>{errors.category}</FormHelperText>}
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Mobile Number&nbsp;<span style={{ color : 'red'}}>*</span></Typography>
                name='mobile'
                id='mobile'
                placeholder='Enter Mobile Number'
                value={values.mobile}
                onChange={handleChangeFormData('mobile')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:phone-in-talk' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.mobile && <FormHelperText sx={{ color: 'error.main' }}>{errors.mobile}<br /></FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>


                <FormControl fullWidth sx={{ mb: 4 }}>

                      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label=<Typography>Date Of Birth<span style={{ color : 'red'}}>*</span></Typography>
                        inputFormat="dd/MM/yyyy"
                        name="dob"
                        openTo="day"
                        value = {basicPicker}
                        onChange={(newValue) => { console.log('newvalue'+ newValue); setBasicPicker(newValue) }}
                        renderInput={params => <TextField {...params}/>}
                        error={Boolean(errors.dob)}
                      />
                    </LocalizationProvider> */}
                    <DatePicker
                    selected={basicPicker}
                    dateFormat="dd-MM-yyyy"
                    showYearDropdown
                    showMonthDropdown
                    placeholderText='DD-MM-YYYY'
                    customInput={<CustomInput />}
                    id='form-layouts-separator-date'
                    onChange={(newValue,basicPicker) => { if(newValue == null || newValue == 'Invalid Date' || !formatDate(newValue)) {
                      //setBasicPicker(basicPicker)
                      setErrors({...errors , dob : 'Date is invalid'})
                      setIsButtonDisabled(true)
                      } else {
                      setBasicPicker(newValue)
                      setErrors({...errors , dob : ''})
                      if(values.first_name != '' && values.middle_name != '' && values.last_name != '' && values.category != '' && values.mobile != '' && values.salutation != '' && values.father_name != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != ''){
                        if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.mobile == '' && errors.salutation == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
                          setIsButtonDisabled(false)
                        }
                      }
                      }
                      }}
                     error={Boolean(errors.dob)}
                    />
                    {errors.dob && <FormHelperText sx={{ color: 'error.main' }}>{errors.dob}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:water-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Blood Group<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='blood_group' onChange={handleChangeFormData('blood_group')} id='grouped-native-select blood_group'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { blood_group.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                    {errors.blood_group && <FormHelperText sx={{ color: 'error.main' }}>{errors.blood_group}</FormHelperText>}
                </FormControl>
             </Grid>

             <FormControl sx={{ mb:4, flexWrap: 'wrap', flexDirection: 'row' }}>
             <FormLabel component='legend' sx={{ margin: '16px 0px 0px 8px !important' }} >Do you have Color Blindness/Uniocularity? <span style={{ color : 'red'}}>*</span> &nbsp; &nbsp;</FormLabel>
              <RadioGroup row value={values.colorblindness} name='colorblindness' id='colorblindness' onClick={handleClickOpen} onChange={handleChangeFormData('colorblindness')} aria-label='colorblindness'>
                <FormControlLabel value='Y' control={<Radio />} label='Yes' />
                <FormControlLabel value='N' control={<Radio />} label='No' />
              </RadioGroup>
          </FormControl>
          <Dialog
        open={open}
        disableEscapeKeyDown
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose()
          }
        }}
      >
        <DialogTitle id='alert-dialog-title'>Information!</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
           Candidates with colour blindness / uniocularity are not permissible for Applied Geology (AGL).
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
          <ButtonNew fullWidth size='large' disabled={isButtonDisabled} type='submit' variant='contained' sx={{ mb: 7}}>
            Submit
          </ButtonNew>
          </Grid>
          </form>
        <Box sx={{ alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography variant='body2' sx={{ mr: 2 }}>
              Already Registered?
            </Typography>
            <Typography variant='body2'>
              <Link passHref href='/pages/auth/register-v1'>
                <LinkStyled>Login Here</LinkStyled>
              </Link>
            </Typography>
          </Box>
      </CardContent>
    </Card>
    </Box>
  </CardContent>
      </Card>
      </Grid>
      }
    </Grid>
    <FooterIllustrationsV1 />
  </Box>
  </DatePickerWrapper>
  )
}

AdmPhdReg.guestGuard = true
AdmPhdReg.getlayout = page => <UserLayout>{page}</UserLayout>

// export const getStaticProps = async () => {
//     const res = await axios.get('/cards/statistics')
//     const apiData = res.data
//     return {
//       props: {
//         apiData
//       }
//     }
//   }

export default AdmPhdReg
