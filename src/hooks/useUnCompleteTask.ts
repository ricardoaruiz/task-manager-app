import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { uncompleteTask } from '@/http/tasks/uncomplete'

type UseUnCompleteTaskParams = UseMutationOptions<void, unknown, string>

export function useUnCompleteTask({
  onSuccess,
  onError,
}: UseUnCompleteTaskParams = {}) {
  const { mutate: unCompleteTaskMutation, isPending: isUnCompleteTaskPending } =
    useMutation<void, unknown, string>({
      mutationFn: (taskId) => uncompleteTask(taskId),
      onSuccess,
      onError,
    })

  return { unCompleteTaskMutation, isUnCompleteTaskPending }
}
