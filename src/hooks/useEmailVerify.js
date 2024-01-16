import { useContext } from 'react'
import { EmailVerifyContext } from 'src/context/EmailVerifyContext'

export const useEmailVerify = () => useContext(EmailVerifyContext)