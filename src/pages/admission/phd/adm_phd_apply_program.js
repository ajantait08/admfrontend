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
import CardHeader from '@mui/material/CardHeader'
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
import Avatar from '@mui/material/Avatar'
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
  //[theme.breakpoints.up('md')]: { width: '34rem' }
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


const AdmPhdApplyProgram = () => {

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

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


  return (
    <Box className='content-center'>
    <Grid container spacing={4} >
    <Grid item xs={12} md={2}>
    dfdsfskf
    </Grid>
    <Grid item xs={12} md={8} sx={{ borderColor:`${theme.palette.error.main}`,backgroundColor: `${theme.palette.common.phd_admission}` , overflow: 'visible', position: 'relative' , paddingRight: '16px'}}>

            <Box sx={{ mb: 8, alignItems: 'center', justifyContent: 'center' }}>
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
        <Box sx={{ mb: 8 }}>
        <Card sx={{ borderLeft : '2px solid green'}}>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
      <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select' sx={{ backgroundColor : '#fff'}}><Icon icon='mdi:book-education' style={{ width: '20px', height: '20px' }} />&nbsp;Programme applying For<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='prog_apply' id='grouped-native-select prog_apply'>
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
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='la:school' style={{ width: '20px', height: '20px' }} />&nbsp;Department<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='blood_group' id='grouped-native-select blood_group'>
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
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:education-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Ph.D. in<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='phd_in' id='grouped-native-select phd_in'>
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
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='arcticons:ctrl-c-programming-idle-game' style={{ width: '20px', height: '20px' }} />&nbsp;Programme Elibility<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.prog_eligibility} name='blood_group' id='grouped-native-select prog_eligibility'>
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
            </Grid>
            </CardContent>
          </Card>
              </Box>
        </CardContent>
          </Card>
          </Box>

          <Box sx={{ mb: 8, alignItems: 'center', justifyContent: 'center' }}>
      <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
        <Box sx={{ mb: 8 }}>
        <Card sx={{ borderLeft : '2px solid green'}}>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
      <Grid container spacing={4}>
      <Grid item xs={12} md={3}>

      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' , backgroundColor: '#e0f9e1' , border: theme => `1px solid ${theme.palette.primary.main}` }}>
            <Avatar
              variant='rounded'
              sx={{
                mr: 3,
                width: '2.625rem',
                height: '2.625rem',
                backgroundColor: 'transparent',
              }}
            >
              <img width={23} height={20} alt='briefcase' src='/images/cards/user.png' />
            </Avatar>
            <Typography variant='body2' sx={{ color:'text.secondary' , fontWeight:'bold'}}>Propose Your Supervisor&nbsp;<span style={{ color : 'red'}}>*</span> :</Typography>
          </Box>
      </Grid>
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='material-symbols-light:priority-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Priority 1<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='blood_group' id='grouped-native-select blood_group'>
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
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='material-symbols-light:priority-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Priority 2</InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='phd_in' id='grouped-native-select phd_in'>
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
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='material-symbols-light:priority-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Priority 3</InputLabel>
                    <Select label='Grouping More More' value={values.prog_eligibility} name='blood_group' id='grouped-native-select prog_eligibility'>
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
            </Grid>
            <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
      </Grid>
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='material-symbols-light:priority-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Priority 4</InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='blood_group' id='grouped-native-select blood_group'>
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
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='material-symbols-light:priority-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Priority 5</InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='phd_in' id='grouped-native-select phd_in'>
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
      <Grid item xs={12} md={3}>
      <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='material-symbols-light:priority-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Priority 6</InputLabel>
                    <Select label='Grouping More More' value={values.prog_eligibility} name='blood_group' id='grouped-native-select prog_eligibility'>
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
            </Grid>
            </CardContent>
          </Card>
              </Box>
        </CardContent>
          </Card>
          </Box>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonNew size='large' type='submit' variant='contained' sx={{ mb: 7}}>
            Add Program
          </ButtonNew>
          </div>
          </Grid>

    <Grid item xs={12} md={2}>
    dfdsfskf
    </Grid>
    </Grid>
    <FooterIllustrationsV1 />
  </Box>
  )
}

AdmPhdApplyProgram.guestGuard = true
AdmPhdApplyProgram.getlayout = page => <UserLayout>{page}</UserLayout>

export default AdmPhdApplyProgram
