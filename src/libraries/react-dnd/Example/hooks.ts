import { useMemo } from 'react'

import { useDragDropManager } from 'react-dnd'

export function useIsDragging (): boolean {
  const dragDropManager = useDragDropManager()
  const dragging = dragDropManager.getMonitor().isDragging()
  const isDragging = useMemo(() => {
    return dragging
  }, [dragging])
  return isDragging
}
