import React from 'react'
import styles from '../styles/Home.module.css'
import Whatsapp from './components/Whatsapp'
import CommunitiePopup from './components/popups/CommunitiePopup'
import MenuPopup from './components/popups/MenuPopup'
import SearchMassagePopup from './components/popups/SearchMassagePopup'
import MenuTwoPopup from './components/popups/MenuTwoPopup'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Whatsapp /> */}
      {/* <CommunitiePopup/> */}
      {/* <MenuPopup/> */}
      <MenuTwoPopup/>
      {/* <SearchMassagePopup/> */}
    </div>
  )
}
