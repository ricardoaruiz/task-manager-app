import { CheckIcon, Loader2Icon, Undo2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { TaskListItemToggleButtonViewProps } from './task-list-item-toggle-button.types'

export function TaskListItemToggleButtonView({
  model,
  ...props
}: TaskListItemToggleButtonViewProps) {
  const { isCompleted, toggleTaskStatus, isPending } = model

  return (
    <Button
      variant="outline"
      onClick={toggleTaskStatus}
      disabled={isPending}
      {...props}
    >
      {!isCompleted &&
        (isPending ? (
          <>
            <Loader2Icon className="h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CheckIcon className="h-5 w-5" />
            Complete Task
          </>
        ))}

      {isCompleted &&
        (isPending ? (
          <>
            <Loader2Icon className="h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Undo2Icon className="h-5 w-5" />
            Uncomplete Task
          </>
        ))}
    </Button>
  )
}
