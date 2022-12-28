import React from 'react'
import styles from '../styles/AppModal.module.css'

export default function AppModal(props) {

  const { title, children, actions, showModal, setShowModal, 
    className, modalClassName } = props

  return (
    <div 
      className={`${styles.appModalContainer} ${className ?? ''} ${showModal ? styles.show : ""}`} 
      onMouseDown={() => setShowModal(false)}
    >
      <div 
        className={`${styles.appModal} ${modalClassName ?? ''}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <header
         style={{
          alignItems: title ? "center" : "flex-end",
          justifyContent: title ? "space-between" : "flex-end",
         }}
        >
          {title && <h4>{title}</h4>}
          <div 
            className={styles.iconContainer} 
            onClick={() => setShowModal(false)}
          >
            <i className="fal fa-times"></i>
          </div>
        </header>
        <section>
          {children}
        </section>
        <footer style={{display: actions ? 'flex' : "none"}}>
          {actions}
        </footer>
      </div>
    </div>
  )
}
