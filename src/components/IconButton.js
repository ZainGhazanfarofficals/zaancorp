import React from 'react';
import Image from 'next/image';
import styles from '@/styles/TopMenu.module.css'


const IconButton = ({iconSrc, height, width, onClick}) => {
    return (
      <div className={styles.iconButton}
        onClick = {onClick}
      >
          <Image src={iconSrc} 
          height = {height}
          width = {width}
          quality={100}
          />
      </div>
    )
}

export default IconButton