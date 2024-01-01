// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

//import importGlobal from 'import-global'

// ** Config
import authConfig from 'src/configs/auth'
import toast from 'react-hot-toast'
import { NotificationManager } from 'react-notifications';
import { NotificationContainer } from 'react-notifications';
import MuiAlert from '@mui/material/Alert';
import swal from 'sweetalert';

// axios.defaults.baseURL = 'http://localhost:8000/';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = false;

// ** Defaults

const defaultProvider = {
  user: null,
  isInitialized: false,
  verifyEmail : () => Promise.resolve(),
  verifyEmailMsg : true
}

const url = process.env.APIURL;
const EmailVerifyContext = createContext(defaultProvider)

//const cryptr = new Cryptr(process.env.CSecretKey);

const EmailVerifyProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)
  const [verifyEmailMsg,setVerifyEmailMsg] = useState(defaultProvider.verifyEmailMsg);

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuths = async (params, errorCallback) => {
      //setVerifyEmailMsg('Coding is Love')
      console.log(window.location.origin)
      const returnUrl = router.query.returnUrl
      const currentUrl = decodeURIComponent(returnUrl)
      const urlParts = currentUrl.split('/');  // Split the URL by '/'
      const lastPart = urlParts[urlParts.length - 1]; // Get the last part of the URL
      const datanew = {email : lastPart}
      if(isValidEmail(lastPart)){
        router.replace("http://localhost:3000/admission/phd/verify_email");
    }
    }
    initAuths()
  }, [router])

  const values = {
    user,
    isInitialized,
    setIsInitialized,
    verifyEmailMsg
  }

  //console.log(values);

  return <EmailVerifyContext.Provider value={values}>{children}</EmailVerifyContext.Provider>
}

export { EmailVerifyContext, EmailVerifyProvider }
