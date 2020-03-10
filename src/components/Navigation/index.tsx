import React, { FC } from 'react'

import { NavigationItem } from '../NavigationItem'

import styles from './navigation.module.scss'

const navigationList = [
  { jumpPoint: '#', linkText: 'ABOUT' },
  { jumpPoint: '#', linkText: 'SKILLS' },
  { jumpPoint: '#', linkText: 'EXPERIENCE' },
  { jumpPoint: '#', linkText: 'WORKS' }
]

export const Navigation: FC = () => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      {navigationList.map((item, index) => (
        <li className={styles.item} key={index}>
          <NavigationItem jumpPoint={item.jumpPoint} text={item.linkText} />
        </li>
      ))}
    </ul>
  </nav>
)
