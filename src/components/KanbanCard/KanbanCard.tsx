import { Card } from '@ozen-ui/kit/Card'
import { Stack } from '@ozen-ui/kit/Stack'
import { Typography } from '@ozen-ui/kit/Typography'

import type { FC } from 'react'

import styles from './KanbanCard.module.scss'

export interface KanbanCardProps {
  name: string
  phone: string
}

export const KanbanCard: FC<KanbanCardProps> = ({ name, phone }) => {
  return (
    <Card size="s" className={styles.card}>
      <Stack direction="column" gap="xs">
        <Typography variant="text-s">{name}</Typography>
        <Typography color="tertiary" variant="text-xs">
          {phone}
        </Typography>
      </Stack>
    </Card>
  )
}
