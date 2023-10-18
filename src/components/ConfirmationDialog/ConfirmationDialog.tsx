import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@ozen-ui/kit/Dialog'
import { Button } from '@ozen-ui/kit/Button'
import { type FC } from 'react'
import { Stack } from '@ozen-ui/kit/Stack'
import { type KanbanCardData } from '../../mock/types'

export interface ConfirmationDialogProps {
  open: boolean
  target: string
  data: KanbanCardData
  onClose: () => void
}

export const ConfirmationDialog: FC<ConfirmationDialogProps> = ({
  open,
  data,
  target,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} size="l" variant="medium">
      <DialogHeader>
        <DialogTitle>Подтвердите действие</DialogTitle>
      </DialogHeader>
      <DialogBody>
        Вы действительно хотите сменить статус <b>{data.name}</b> на <b>{target}</b>?
      </DialogBody>
      <DialogFooter>
        <Stack gap="s">
          <Button variant="ghost" color='error' onClick={onClose}>Отменить</Button>
          <Button onClick={onClose}>Сменить статус</Button>
        </Stack>
      </DialogFooter>
    </Dialog>
  )
}
