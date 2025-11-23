import { useTaskListItemButtonModel } from './task-list-item-button.model'
import type { TaskListItemButtonViewModelProps } from './task-list-item-button.types'
import { TaskListItemButtonView } from './task-list-item-button.view'

export function TaskListItemButtonViewModel({
  taskId,
  completed,
}: TaskListItemButtonViewModelProps) {
  const model = useTaskListItemButtonModel({ taskId, completed })

  return <TaskListItemButtonView model={model} />
}
