import React from 'react'
import styles from '@/styles/Components.module.css'
import Image from 'next/image'

const Button = ({iconSrc, buttonText, onClick, buttonColor}) => {

  return (
    <div className={buttonColor == 'blue' ? styles.blueButton : styles.button}
        onClick = {onClick}
    >
        
            {
                iconSrc ? (
                    <div className={styles.buttonIcon}>
                    <Image src={iconSrc}
                        height = {16}
                        width={16}
                        quality={100}
                    />
                    </div>
                ) : null
            }
        <div className={styles.buttonText}>
            {buttonText}
        </div>
    </div>
  )
}

export default Button