import React, { FC } from 'react'

import styles from './item.module.scss'

type Props = {
  jumpPoint: string
  text: string
}

export const Item: FC<Props> = ({ jumpPoint, text }) => (
  <a className={styles.text} href={jumpPoint}>
    {text}
  </a>
)
