import { CheckIcon, Undo2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { TaskListItemButtonProps } from './task-list-item.types'

export function TaskListItemButtonView({
  completed,
  ...props
}: TaskListItemButtonProps) {
  return (
    <Button variant="outline" {...props}>
      {completed && (
        <>
          <CheckIcon className="h-5 w-5" />
          Complete Task
        </>
      )}

      {!completed && (
        <>
          <Undo2Icon className="h-5 w-5" />
          Uncomplete Task
        </>
      )}
    </Button>
  )
}
