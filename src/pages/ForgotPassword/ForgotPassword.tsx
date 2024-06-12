import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Auth } from 'src/apis/auth.api'
import Input from 'src/components/Input'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<any>()
  const ForgotPassword = useMutation({
    mutationFn: (body: { email: string }) => Auth.Forgotpassword(body)
  })
  const onSubmit = handleSubmit((paylaod) => {
    ForgotPassword.mutate(paylaod, {
      onSuccess: () => {
        toast.success('Config')
      }
    })
  })
  return (
    <div>
      Forgot password
      <div>
        <form onSubmit={onSubmit}>
          <Input name='email' type='email' register={register} placeholder='Email' />
          <button type='submit'>Comfing</button>
        </form>
      </div>
    </div>
  )
}
