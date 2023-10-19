import type { FC } from 'react'

import type { KanbanCardData, KanbanCardStatus } from '$mock'

export interface ExampleProps {
  onChange: (name: KanbanCardData, target: KanbanCardStatus) => void
}

export interface LibraryExample {
  name: string
  directory?: string
  Example?: FC<ExampleProps>
}
