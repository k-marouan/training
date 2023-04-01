import React from 'react'
import styles from './Card.module.css';

const Card = ({id, name, age, address, phone, type, deleteElemnt }) => {
  return (
    <div 
        className={ styles.cardWrapper } 
        style={{ backgroundColor: type === "family" ? "gold" : "green" }}>
            <div>Name : { name }</div>
            <div>Age : { age }</div>
            <div>Address : { address }</div>
            <div>Phone : { phone }</div>
            <div className={ styles.deleteBtn } onClick={ () => (deleteElemnt(id)) }>X</div>
        </div>
  )
}

export default Card