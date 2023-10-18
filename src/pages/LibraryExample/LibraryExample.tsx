import type { FC, PropsWithChildren } from 'react'
import { Typography } from '@ozen-ui/kit/Typography'
import styles from './LibraryExample.module.scss'
import { Link } from '@ozen-ui/kit/Link'
import { Stack } from '@ozen-ui/kit/Stack'

export type LibraryExampleProps = PropsWithChildren<{
  title: string
  directory: string
}>

const formatExampleUrl = (dir: string): string => {
  return `https://github.com/mishamyrt/react-dnd-experiments/tree/main/src/libraries/${dir}/Example`
}

const formatBundlephobiaUrl = (packageName: string): string => {
  return `https://bundlephobia.com/package/${packageName}`
}

export const LibraryExample: FC<LibraryExampleProps> = ({ children, title, directory }) => {
  return (
    <div className={styles.example}>
      <Stack align='center' direction="row" gap="xl">
        <Typography color="tertiary" variant="heading-3xl">
          {title}
        </Typography>
        <Link variant='text-s' href={formatBundlephobiaUrl(title)} target='_blank'>Bundlephobia</Link>
        <Link variant='text-s' href={formatExampleUrl(directory)} target='_blank'>Код примера</Link>
      </Stack>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
