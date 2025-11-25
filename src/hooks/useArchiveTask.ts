import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { archiveTask } from '@/http/tasks/archive'

type UseDeleteTaskParams = UseMutationOptions<void, unknown, string>

export function useArchiveTask({
  onSuccess,
  onError,
}: UseDeleteTaskParams = {}) {
  const { mutate: archiveTaskMutation, isPending: isArchiveTaskPending } =
    useMutation<void, unknown, string>({
      mutationFn: (taskId) => archiveTask(taskId),
      onSuccess,
      onError,
    })

  return { archiveTaskMutation, isArchiveTaskPending }
}
