import React from 'react'
const TextInputGroup = ({type,name,value,onChange,placeholder,label,htmlFor}) => {
    return (
        <div className="form-group">
              <label htmlFor={htmlFor}>{label}</label>
              <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="form-control form-control-lg"
                placeholder={placeholder}
              />
            </div>
    )
}
TextInputGroup.defaultProps={
    type:'text'
 }
export default TextInputGroup;