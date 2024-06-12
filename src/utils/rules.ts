import * as yup from 'yup'
export const shemaLogin = yup.object({
  username: yup.string().required('Name là bắt bộc'),
  password: yup.string().required('password là bắt bộc'),
  company_id: yup.number().required('bắt buộc')
})

export type SchemaLogin = yup.InferType<typeof shemaLogin>
