import React from 'react'
import styles from './Filter.module.css'

const Filter = ({ filtration }) => {

    const filterHandler = (e) => {
        filtration(e.target.value);
    }

  return (
    <div className={ styles.mb20 }>
        <input
            type="text"
            placeholder="Filter Names.."
            onChange={ filterHandler }
        />
    </div>
  )
}

export default Filter