import React from 'react'
import styles from './Form.module.css'

const Button = (props) => {
  return (
    <button 
        className= {styles.button }
        type={ `${props.type ? props.type : 'button'}` }
        style={{ marginBottom: "20px" }} 
        onClick={ props.onClick }
    >
        { props.children }
    </button>
  )
}

export default Button