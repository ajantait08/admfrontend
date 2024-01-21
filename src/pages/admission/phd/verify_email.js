// ** React Imports
import { useState, Fragment , forwardRef , useEffect } from 'react'

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
//import he from 'he';


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

const url = process.env.APIURL;
//axios.defaults.withCredentials = true;


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


const VerifyEmail = () => {

  // ** Hooks
  const auth = useAuth()
  const router = useRouter()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const [backdropOpen , setBackdropOpen] = useState(false);
  const [emailErrStatus , setEmailErrStatus] = useState('');
  //const [] = useState(false);


  // const param1 = router.query.email;
  // const decodeparam1 = param1 ? atob(param1) : null;

  // function decodeEmail(encodedEmail) {
  //   var decodedEmail = "";
  //   var charCodes = encodedEmail.split(";");
  //   for (var i = 0; i < charCodes.length - 1; i++) {
  //     var code = charCodes[i].replace("&#", "");
  //     decodedEmail += String.fromCharCode(code);
  //   }
  //   return decodedEmail;
  // }

  useEffect(() => {
    const fetchData = async () => {
      setBackdropOpen(true);
      try {
        const param1 = router.query.email;
        if (param1) {
          const decodeParam1 = atob(param1);
          const data = {
            email: decodeParam1,
          };
          await axios.post(url + 'verify_email', data, {
            headers: {
              'Accept': 'application/json',
            },
          }).then(async (response) => {
            setBackdropOpen(false);
            if(response.data.status === true){
              setEmailErrStatus(false);
            }
          }).catch(err =>
            {
              setBackdropOpen(false);
            }
          );
        }
        else {
          setBackdropOpen(true);
        }
      } catch (error) {
        setBackdropOpen(true);
      }
    };
    fetchData();
  }, [router.query.email]); // Add router.query.email to the dependencies array

  // Rest of your component code

  return (
    <DatePickerWrapper>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <Typography variant='h5' sx={{ color: 'wheat' , fontWeight: 800 , textAlign:'center'}}>&nbsp;&nbsp;
        <CircularProgress sx={{ color: 'wheat'}}
        />
        <br />
        Please wait while verifying Email...</Typography>
      </Backdrop>
    <Box className='content-center'>
    <Grid container spacing={4} >
    <Grid item xs={12} md={2} sx={{ alignSelf: 'flex-start' }}>
    </Grid>
    <Grid item xs={12} md={10} sx={{ alignSelf: 'flex-start' }}>
        <Card sx={{ width: '800px !important' , backgroundColor: `${theme.palette.common.phd_admission_dark}`}} >
        <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
            <Box sx={{ mb: 8, alignItems: 'center', justifyContent: 'center' }}>
    <Card sx={{ width: '750px !important'}}>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
      {emailErrStatus ? <Alert severity='error' sx={{margin: theme.spacing(10)}}>{isDisplayErrorMsg ? isDisplayErrorMsg : 'Sorry There is no appropriate message to display'}</Alert> : ''}
        <Box sx={{ mb: 8 }}>
        <Card sx={{ backgroundColor: `${theme.palette.common.phd_admission}` , width: '700px !important', overflow: 'visible', position: 'relative' }}>
      <CardContent>
      </CardContent>
    </Card>
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
  </DatePickerWrapper>
  )
}

VerifyEmail.guestGuard = true
VerifyEmail.getlayout = page => <UserLayout>{page}</UserLayout>

export default VerifyEmail
