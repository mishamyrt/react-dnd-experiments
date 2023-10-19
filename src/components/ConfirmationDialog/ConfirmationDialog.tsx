import { type FC } from 'react'

import { Button } from '@ozen-ui/kit/Button'
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@ozen-ui/kit/Dialog'
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
        <DialogTitle>Are you sure?</DialogTitle>
      </DialogHeader>
      <DialogBody>
        You really want to change the status of user <b>{data.name}</b> to{' '}
        <b>{target}</b>?
      </DialogBody>
      <DialogFooter>
        <Stack gap="s">
          <Button variant="ghost" color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Confirm</Button>
        </Stack>
      </DialogFooter>
    </Dialog>
  )
}
