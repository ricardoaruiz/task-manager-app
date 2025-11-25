import { toast } from 'react-toastify'
import { useArchiveTask } from '@/hooks/useArchiveTask'
import { TASKS_QUERY_KEY } from '@/hooks/useListTasks'
import type { TaskListItemArchiveButtonModelProps } from './task-list-item-archive-button.types'

export function useTaskListItemArchiveButtonModel({
  taskId,
}: TaskListItemArchiveButtonModelProps) {
  const { archiveTaskMutation, isArchiveTaskPending } = useArchiveTask({
    onSuccess: (_data, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] })
      toast.success('Task archived successfully!', { position: 'top-center' })
    },
    onError: () => {
      toast.error('Failed to archive the task. Please try again.', {
        position: 'top-center',
      })
    },
  })

  const archiveTask = () => archiveTaskMutation(taskId)

  return { archiveTask, isArchiveTaskPending }
}
