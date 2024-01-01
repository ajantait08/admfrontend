import { useContext } from 'react'
import { EmailVerifyContext } from 'src/context/ProgramDetailsContext'

export const useEmailVerify = () => useContext(EmailVerifyContext)