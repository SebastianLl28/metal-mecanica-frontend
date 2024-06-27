import Input from '@components/ui/Input'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useFindAllCategories } from './useFindAllCategories'
import Select from '@components/ui/Select'
import { Text } from '@styled/Text'
import { Button } from '@styled/Buttons'
import { usePostProduct } from './usePostProduct'

const useFormModal = type => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { data, isLoading, isSuccess, isError } = useFindAllCategories()

  const { mutate } = usePostProduct()

  const handleOnSubmit = data => {
    mutate(data)
  }

  const Form = () => {
    return (
      <Main onSubmit={handleSubmit(handleOnSubmit)}>
        <Input
          isRequired
          wrapperClass='span'
          hookForm={{
            ...register('description', {
              required: {
                value: true,
                message: 'El description es requerido'
              }
            })
          }}
          label='Description'
          error={errors.description}
        />
        <Input
          isRequired
          type='number'
          hookForm={{
            ...register('price', {
              required: {
                value: true,
                message: 'El description es requerido'
              },
              valueAsNumber: true,
              min: {
                value: 0,
                message: 'El precio debe ser mayor a 0'
              }
            })
          }}
          label='Precio'
          error={errors.description}
        />
        <Input
          isRequired
          type='number'
          hookForm={{
            ...register('stock', {
              required: {
                value: true,
                message: 'El description es requerido'
              },
              valueAsNumber: true,
              min: {
                value: 0,
                message: 'El stock debe ser mayor a 0'
              }
            })
          }}
          label='Stock'
          error={errors.description}
        />
        <Select
          isRequired
          label='Categoria'
          wrapperClass='span'
          hookForm={{
            ...register('categoryId', {
              required: {
                value: true,
                message: 'La categoria es requerida'
              }
            })
          }}
          error={errors.categoryId}>
          {!isLoading &&
            isSuccess &&
            data.categories &&
            data.categories.length > 0 &&
            data.categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          {isLoading && <option>Cargando...</option>}
          {isError && !isLoading && <option>Error</option>}
        </Select>
        <Input
          type='text'
          wrapperClass='span'
          hookForm={{
            ...register('imagen')
          }}
          label='Imagen'
          error={errors.imagen}
        />
        <Button type='submit' $margin='1rem 0 0 0'>
          Enviar
        </Button>
      </Main>
    )
  }

  return { Form }
}

export default useFormModal

const Main = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2em 2rem;

  & > .span {
    grid-column: span 2;
  }
`
