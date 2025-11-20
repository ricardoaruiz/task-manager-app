import { useQuery } from '@tanstack/react-query'
import { listTasks } from '../http/tasks/list'

export const TASKS_QUERY_KEY = 'tasks'

type UseListTasksFilter = {
  title?: string
  description?: string
  completedStatus?: string
  pendingStatus?: string
}

export function useListTasks({
  title,
  description,
  completedStatus,
  pendingStatus,
}: UseListTasksFilter = {}) {
  const { data, isLoading, refetch } = useQuery<
    Awaited<ReturnType<typeof listTasks>>
  >({
    queryKey: [
      TASKS_QUERY_KEY,
      { title, description, completedStatus, pendingStatus },
    ],
    queryFn: () =>
      listTasks({ title, description, completedStatus, pendingStatus }),
  })

  return {
    tasksData: data?.tasks ?? [],
    isTasksLoading: isLoading,
    refetchTasks: refetch,
  }
}
