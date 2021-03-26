import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './style.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

const inputStyle = {
  fontFamily: 'FontAwesome, Arial',
  fontStyle: 'normal',
}

export default function SearchWithIcon(props) {
  const { label, placeholder, type, name, onchange } = props

  return (
    <InputGroup className="mb-3">
      <label htmlFor={name}></label>
      <FormControl
        onChange={(event) => onchange(event.target.value)}
        id={label}
        type={type}
        style={{ ...inputStyle }}
        className="rounded-pill border-0 bg-light"
        placeholder={placeholder}
        aria-label={label}
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  )
}
