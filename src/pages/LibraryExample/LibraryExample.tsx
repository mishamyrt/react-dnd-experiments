import type { FC, PropsWithChildren } from 'react'
import { Typography } from '@ozen-ui/kit/Typography'
import styles from './LibraryExample.module.scss'

export type LibraryExampleProps = PropsWithChildren<{
  title: string
}>

export const LibraryExample: FC<LibraryExampleProps> = ({ children, title }) => {
  return (
    <div className={styles.example}>
      <div className={styles.header}>
        <Typography color="tertiary" variant="heading-3xl">
          {title}
        </Typography>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
