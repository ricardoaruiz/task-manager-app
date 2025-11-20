import { cn } from '@/lib/utils'
import type { TaskListItemDescriptionProps } from './task-list-item.types'

export function TaskListDescriptionView({
  className,
  ...props
}: TaskListItemDescriptionProps) {
  return <p className={cn('text-zinc-700', className)} {...props} />
}
