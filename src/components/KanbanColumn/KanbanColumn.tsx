import type { FC, PropsWithChildren } from 'react'

import { Typography } from '@ozen-ui/kit/Typography'

import styles from './KanbanColumn.module.scss'
import clsx from 'clsx'

export type KanbanColumnProps = PropsWithChildren<{
  title: string
  active?: boolean
}>

export const KanbanColumn: FC<KanbanColumnProps> = ({ title, children, active }) => {
  return (
    <div
      className={clsx(styles.column, {
        [styles.active]: active,
      })}
    >
      <div className={styles.header}>
        <Typography color="secondary" variant="heading-xl">
          {title}
        </Typography>
      </div>
      <div className={styles.items}>{children}</div>
    </div>
  )
}
