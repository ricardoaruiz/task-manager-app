import { useTaskListItemToggleButtonModel } from './task-list-item-toggle-button.model'
import type { TaskListItemToggleButtonViewModelProps } from './task-list-item-toggle-button.types'
import { TaskListItemToggleButtonView } from './task-list-item-toggle-button.view'

export function TaskListItemToggleButtonViewModel({
  taskId,
  completed,
}: TaskListItemToggleButtonViewModelProps) {
  const model = useTaskListItemToggleButtonModel({ taskId, completed })

  return <TaskListItemToggleButtonView model={model} />
}
