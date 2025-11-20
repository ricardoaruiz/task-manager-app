import { cn } from '@/lib/utils'
import { TaskListItem } from '../task-list-item'
import type { TaskListItemsViewProps } from './task-list-items.types'
import { TaskListSkeletonView } from './task-list-skeleton.view'

export function TaskListItemsView({
  model,
  className,
  ...props
}: TaskListItemsViewProps) {
  const { tasksData, isTasksLoading } = model
  const noDataFound = !isTasksLoading && !tasksData.length

  if (isTasksLoading) {
    return <TaskListSkeletonView count={3} />
  }

  if (noDataFound) {
    return (
      <p className="text-2xl font-semibold text-center">No tasks listed.</p>
    )
  }

  return (
    <ul className={cn('flex flex-col gap-4', className)} {...props}>
      {tasksData.map((task) => (
        <TaskListItem.Root key={task.id}>
          <TaskListItem.Group>
            <TaskListItem.Title>{task.title}</TaskListItem.Title>
            <TaskListItem.Description>
              {task.description}
            </TaskListItem.Description>
          </TaskListItem.Group>

          <TaskListItem.Group className="items-end">
            <TaskListItem.Status completed={!!task.completed_at} />
            <TaskListItem.Button completed={!!task.completed_at} />
          </TaskListItem.Group>
        </TaskListItem.Root>
      ))}
    </ul>
  )
}
