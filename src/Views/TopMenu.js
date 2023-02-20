import React from 'react'
import styles from '@/styles/TopMenu.module.css'
import Image from 'next/image'
import IconButton from '@/components/IconButton';

const TopMenu = () => {
  return (
    <div className={styles.main}>
      <div className={styles.notifications}>
        <div className={styles.notifications__container}>
          <Notifications />
          <div className={styles.downIcon}>
            <Image src='/Arrow Chevron.png' 
            height = {24}
            width = {24}
            quality={100}
            />
          </div>
        </div>
        
      </div>
      <div className={styles.button}>
        <IconButton
          iconSrc='/GroupHelp.png'
          height={24}
          width={24}
        />
      </div>
      <div className={styles.add}>
        <div>
          <Image src='/Plus.png' 
          height = {24}
          width = {24}
          quality={100}
          className={styles.plus}
          />
        </div>
      </div>
      <div className={styles.search}>
        <input 
          type='text'
          placeholder='Search'
        />
      </div>
      <div className={styles.button}>
        <IconButton
          iconSrc='/Announcement.png'
          height={24}
          width={24}
        />
      </div>
      <div className={styles.button}>
        <IconButton
          iconSrc='/Calender.png'
          height={24}
          width={24}
        />
      </div>
      <div className={styles.button}>
        <IconButton
          iconSrc='/ChatAlert.png'
          height={24}
          width={24}
        />
      </div>
      <div className={styles.avatar}>
        <ProfileAvatar 
          profileSrc='/main.png'
          height={24}
          width={24}
        />
      </div>
    </div>
  )
}

const ProfileAvatar = ({profileSrc}) => {
  return (
    <div className={styles.avatarProfile}>
      <Image src={profileSrc} 
        fill={true}
        quality={100}
      />
    </div>
  ) 
}

const Notifications = () => {
  return (
    <div className={styles.profilesContainer}>
    <div className={styles.singlerow}>
      <div className={styles.notifications__avatar} >
        <Image 
          src='/other1.png'
          fill={true}
          quality={100}
        />
      </div>
      <div className={styles.notifications__number}>
        15
      </div>
    </div>
    <div className={styles.singlerow}>
      <div className={styles.notifications__avatar} >
        <Image 
          src='/other2.png'
          fill={true}
          quality={100}
        />
      </div>
      <div className={styles.notifications__number2}>
        11
      </div>
    </div>
    </div>
  )
}
export default TopMenu