import { Stack } from '@ozen-ui/kit/Stack'

import type { FC, PropsWithChildren } from 'react'

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
