import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('El correo tiene que estar en el formato adecuado')
    .required('El correo es requerido'),
  password: yup
    .string()
    .min(5, 'La contraseña tiene que tener al menos 5 caracteres')
    .required('La contraseña es requerida')
})
