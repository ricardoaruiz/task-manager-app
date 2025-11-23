import type { ComponentProps } from 'react'
import type { useTaskListItemButtonModel } from './task-list-item-button.model'

export type TaskListItemButtonModelProps = {
  taskId: string
  completed: boolean
}

export type TaskListItemButtonViewProps = {
  model: ReturnType<typeof useTaskListItemButtonModel>
}

export type TaskListItemButtonViewModelProps = ComponentProps<'button'> & {
  taskId: string
  completed: boolean
}
