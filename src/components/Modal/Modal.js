import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const Backdrop = ({ closeModal }) => {
    return <div className={ styles.backDrop } onClick={ closeModal }></div>
}

const Overlay = ({ children }) => { 

    return (
        <div className={ styles.overlay }>
            { children }
        </div>
    )
}


const Modal = ({ children, show, close }) => {
    
  return (
    show && (
        <Fragment>
        {
            ReactDOM.createPortal(
                <Fragment>
                    <Backdrop closeModal={ close } />
                    <Overlay>
                        { children }
                    </Overlay>
                </Fragment>,
                document.getElementById('modal')
            )
        }
        </Fragment>
    )
  )
}

export default Modal