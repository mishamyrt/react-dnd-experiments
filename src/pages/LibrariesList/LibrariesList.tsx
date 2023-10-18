import type { FC } from 'react'

import { Stack } from '@ozen-ui/kit/Stack'
import { Card } from '@ozen-ui/kit/Card'

import { libraries } from '../../libraries'

import styles from './LibrariesList.module.scss'
import { Link } from 'react-router-dom'
import { Typography } from '@ozen-ui/kit/Typography'

export const LibrariesList: FC = () => {
  return (
    <Card className={styles.card}>
      <Stack direction="column" gap="l">
        {libraries.map(({ name, Example }) =>
          Example
            ? (
            <Link className={styles.link} key={name} to={`/lib/${name}`}>
              <Typography color="action" variant="heading-2xl">
                {name}
              </Typography>
            </Link>
              )
            : (
            <Typography key={name} color="secondary" variant="heading-2xl">
              {name}
            </Typography>
              ),
        )}
      </Stack>
    </Card>
  )
}
