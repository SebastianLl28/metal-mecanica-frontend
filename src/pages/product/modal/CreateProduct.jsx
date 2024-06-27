import { Text } from '@styled/Text'
import useFormModal from '../hooks/useFormModal'
import { Box } from '@styled'

const CreateProduct = ({ type = 'view' }) => {
  const { Form } = useFormModal(type)

  return (
    <Box $width='26rem'>
      <Text $fontSize='1.8em' $weight='bold' $align='center'>
        Producto
      </Text>
      <Form />
    </Box>
  )
}

export default CreateProduct
