import type { ComponentProps } from 'react'
import type { useTaskListFilterFormModel } from './task-list-filter-form.model'

export type TaskListFilterFormModelViewProps = ComponentProps<'form'>

export type TaskListFilterFormViewProps = TaskListFilterFormModelViewProps & {
  model: ReturnType<typeof useTaskListFilterFormModel>
}
