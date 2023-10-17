import type { FC } from 'react'

import { Stack } from '@ozen-ui/kit/Stack'
import { Link } from '@ozen-ui/kit/Link'
import { Card } from '@ozen-ui/kit/Card'

import { libraries } from '../../libraries'

import styles from './LibrariesList.module.scss'

export const LibrariesList: FC = () => {
  return (
    <Card className={styles.card}>
      <Stack direction="column" gap="l">
        {libraries.map(({ name }) => (
          <Link variant="heading-2xl" key={name} href={`/lib/${name}`}>
            {name}
          </Link>
        ))}
      </Stack>
    </Card>
  )
}
