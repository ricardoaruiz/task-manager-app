import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useCompleteTask } from '@/hooks/useCompleteTask'
import { useUnCompleteTask } from '@/hooks/useUnCompleteTask'
import type { Task } from '@/http/tasks/list'
import type { TaskListItemButtonModelProps } from './task-list-item-button.types'

export function useTaskListItemButtonModel({
  taskId,
  completed,
}: TaskListItemButtonModelProps) {
  const queryClient = useQueryClient()

  const updateViewData = () => {
    queryClient
      .getQueriesData({
        queryKey: ['tasks'],
      })
      .forEach(([key, _]) => {
        queryClient.setQueryData(key, (oldData: { tasks: Task[] }) => {
          const newData = oldData.tasks.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                completed_at: completed ? null : new Date().toISOString(),
              }
            }
            return task
          })

          return { tasks: newData }
        })
      })
  }

  const { completeTaskMutation, isCompleteTaskPending } = useCompleteTask({
    onSuccess: updateViewData,
    onError: () => {
      toast.error('Failed to complete the task. Please try again.', {
        position: 'top-center',
      })
    },
  })

  const { unCompleteTaskMutation, isUnCompleteTaskPending } = useUnCompleteTask(
    {
      onSuccess: updateViewData,
      onError: () => {
        toast.error('Failed to uncomplete the task. Please try again.', {
          position: 'top-center',
        })
      },
    },
  )

  const toggleTaskStatus = () =>
    completed ? unCompleteTaskMutation(taskId) : completeTaskMutation(taskId)

  const isPending = isCompleteTaskPending || isUnCompleteTaskPending

  return { isCompleted: completed, isPending, toggleTaskStatus }
}
