import React, { FC } from 'react'

import styles from './navigationItem.module.scss'

type Props = {
  jumpPoint: string
  text: string
}

export const NavigationItem: FC<Props> = ({ jumpPoint, text }) => (
  <a className={styles.text} href={jumpPoint}>
    {text}
  </a>
)
