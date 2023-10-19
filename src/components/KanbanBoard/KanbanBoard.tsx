import { Grid } from '@ozen-ui/kit/Grid'

import type { FC, PropsWithChildren } from 'react'

import styles from './KanbanBoard.module.scss'

export const KanbanBoard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid gap="l" className={styles.board} cols={4}>
      {children}
    </Grid>
  )
}
