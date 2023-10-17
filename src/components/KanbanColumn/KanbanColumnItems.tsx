import type { FC, PropsWithChildren } from 'react'

import { Stack } from '@ozen-ui/kit/Stack'

export type KanbanColumnItemsProps = PropsWithChildren<{
  containerRef?: any
}>

export const KanbanColumnItems: FC<KanbanColumnItemsProps> = ({
  children,
  containerRef,
}) => {
  return (
    <Stack ref={containerRef} fullWidth direction="column" gap="l">
      {children}
    </Stack>
  )
}
