import type { ComponentProps } from 'react'
import type { useTaskListItemsModel } from './task-list.model'

export type TaskListItemViewModelProps = {
  updateIsLoading: (isLoading: boolean) => void
}

export type UseTaskListItemsModel = {
  filter: {
    title?: string
    description?: string
    completedStatus?: string
    pendingStatus?: string
  }
  updateIsLoading: (isLoading: boolean) => void
}

export type TaskListItemsViewProps = ComponentProps<'ul'> & {
  model: ReturnType<typeof useTaskListItemsModel>
}

export type TaskListItemsSkeletonProps = ComponentProps<'div'> & {
  count?: number
}
