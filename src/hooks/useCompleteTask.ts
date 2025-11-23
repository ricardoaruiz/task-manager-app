import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { completeTask } from '@/http/tasks/complete'

type UseCompleteTaskParams = UseMutationOptions<void, unknown, string>

export function useCompleteTask({
  onSuccess,
  onError,
}: UseCompleteTaskParams = {}) {
  const { mutate: completeTaskMutation, isPending: isCompleteTaskPending } =
    useMutation<void, unknown, string>({
      mutationFn: (taskId) => completeTask(taskId),
      onSuccess,
      onError,
    })

  return { completeTaskMutation, isCompleteTaskPending }
}
