import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './style.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { useField } from 'formik'

const inputStyle = {
  fontFamily: 'FontAwesome, Arial',
  fontStyle: 'normal',
}

export default function SearchWithIcon(props) {
  const { label, placeholder, type, name } = props
  const [field, meta] = useField(props)

  return (
    <InputGroup className="mb-3">
      <label htmlFor={name}></label>
      <FormControl
        {...field}
        {...props}
        id={label}
        type={type}
        style={{ ...inputStyle }}
        className="rounded-pill"
        placeholder={placeholder}
        aria-label={label}
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  )
}
