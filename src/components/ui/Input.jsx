import { useId } from "react"

const Input = ({ className, type="text", label, hookForm, error, ...args }) => {

  const id = useId()

  return (
    <div>
      {label ? (
        <label
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
      <input type={type} {...args} />
      {error ? (
        <span className='absolute -bottom-px left-0 text-xs text-red-500'>
          {error.message}
        </span>
      ) : null}
    </div>
  )
}

export default Input
