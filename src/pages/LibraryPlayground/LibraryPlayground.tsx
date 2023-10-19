import { type FC, useCallback, useState } from 'react'

import { useBoolean } from '@ozen-ui/kit/useBoolean'

import { ConfirmationDialog } from '$components'
import { boardData, type KanbanCardData, type KanbanCardStatus } from '$mock'

import type { ExampleProps } from '../../libraries/types'
import { LibraryExample } from '../LibraryExample'

interface LibraryPlaygroundProps {
  name: string
  directory: string | undefined
  example: FC<ExampleProps> | undefined
}

export const LibraryPlayground: FC<LibraryPlaygroundProps> = ({
  name,
  directory,
  example,
}) => {
  const [selected, setSelected] = useState({
    data: boardData[0].items[0],
    target: boardData[0].title,
  })
  const [open, { off, on }] = useBoolean(false)
  const handleSelectItem = useCallback(
    (data: KanbanCardData, target: KanbanCardStatus) => {
      setSelected({
        data,
        target,
      })
      on()
    },
    [],
  )

  const ExampleComponent = example

  return (
    <LibraryExample title={name} directory={directory ?? name}>
      {ExampleComponent ? <ExampleComponent onChange={handleSelectItem} /> : null}
      <ConfirmationDialog
        data={selected.data}
        target={selected.target}
        open={open}
        onClose={off}
      />
    </LibraryExample>
  )
}
