import { ArchiveIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
      {tasksData.map((task) => {
        const isCompleted = !!task.completed_at

        return (
          <TaskListItem.Root
            key={task.id}
            className="justify-start md:justify-between"
          >
            <TaskListItem.Group className="flex-1/2">
              <TaskListItem.Title>
                {task.title}
                <span className="text-sm ml-5 text-zinc-700">
                  {task.completed_at
                    ? `Completed at ${new Date(task.completed_at).toLocaleDateString('pt-BR')}`
                    : null}
                </span>
              </TaskListItem.Title>
              <TaskListItem.Description>
                {task.description}
              </TaskListItem.Description>
            </TaskListItem.Group>

            <TaskListItem.Group className="flex-1/3">
              <div className="flex items-center justify-center gap-2">
                <TaskListItem.Status completed={!!task.completed_at} />

                <TaskListItem.DeleteButton
                  taskId={task.id}
                  isVisible={!isCompleted}
                />

                {isCompleted && (
                  // TODO: implement task item archive button
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-4 focus:ring-2 focus:ring-red-300"
                    aria-label="Archive task"
                  >
                    <ArchiveIcon />
                  </Button>
                )}
              </div>
              <TaskListItem.ToggleButton
                taskId={task.id}
                completed={isCompleted}
              />
            </TaskListItem.Group>
          </TaskListItem.Root>
        )
      })}
    </ul>
  )
}
