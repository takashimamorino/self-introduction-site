import React, { FC } from 'react'

import { Item } from './Item'

import styles from './navigation.module.scss'

const navigationList = [
  { jumpPoint: '#', linkText: 'ABOUT' },
  { jumpPoint: '#skills', linkText: 'SKILLS' },
  { jumpPoint: '#experience', linkText: 'EXPERIENCE' },
  { jumpPoint: '#works', linkText: 'WORKS' }
]

export const Navigation: FC = () => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      {navigationList.map((item, index) => (
        <li className={styles.item} key={index}>
          <Item jumpPoint={item.jumpPoint} text={item.linkText} />
        </li>
      ))}
    </ul>
  </nav>
)
