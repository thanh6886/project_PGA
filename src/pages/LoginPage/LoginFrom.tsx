import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { SchemaLogin, shemaLogin } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { GetlocalStorage, SetlocalStorage } from 'src/utils/utils'
import path from 'src/constants/path'

export default function LoginFrom() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<SchemaLogin>({
    resolver: yupResolver<SchemaLogin>(shemaLogin)
  })
  const loginMutation = useMutation({
    mutationFn: (body: SchemaLogin) => Auth.login(body)
  })
  const onSubmit = handleSubmit((paylaod) => {
    loginMutation.mutate(paylaod, {
      onSuccess: (data) => {
        // console.log(data.data.data.token)
        SetlocalStorage(data.data.data.token)
        navigate('/')
      }
    })
  })
  return (
    <div className='grid justify-center bg-slate-200'>
      <div>Sign In</div>
      <form onSubmit={onSubmit}>
        <Input name='username' register={register} type='text' placeholder='name' />
        <Input name='password' register={register} type='password' placeholder='Password' />
        <select {...register('company_id')} className='h-12 w-full cursor-pointer rounded-sm border'>
          {['SBM', 'DMF'].map((e, index) => (
            <option key={e} value={index + 1}>
              {e}
            </option>
          ))}
        </select>
        <div>
          <Button
            type='submit'
            className='flex  w-full items-center justify-center bg-blue-500 py-4 px-2 text-sm uppercase text-white hover:bg-blue-700 rounded-lg mt-3'
          >
            SIGN IN
          </Button>
        </div>
      </form>

      <div>
        <Link to={path.forgotpassword}>Forgot password</Link>
      </div>
    </div>
  )
}
