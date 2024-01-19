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


const AdmPhdHome = () => {

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <DatePickerWrapper>
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
        <Box sx={{ mb: 8 }}>
        <Card sx={{ backgroundColor: `${theme.palette.common.phd_admission}` , width: '700px !important', overflow: 'visible', position: 'relative' }}>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 6.5, fontWeight: 600 }}>
         Welcome to {themeConfig.templateName} !
        </Typography>
        <Box sx={{ mb: 1.5, rowGap: 1, width: '65%', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
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

        <Img src="/images/pages/create-deal-review-complete.png" alt="Ratings"/>
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

AdmPhdHome.guestGuard = true
AdmPhdHome.getlayout = page => <UserLayout>{page}</UserLayout>

export default VerifyEmail
