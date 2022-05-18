import React from 'react'

const Input = ({ type, name, placeholder, value, onChange, handleclick, className, autoComplete}) => {
  return <input type={type} className={className} onClick={handleclick} name={name} placeholder={placeholder} value={value} onChange={onChange} autoComplete={autoComplete} />
}

export default Input