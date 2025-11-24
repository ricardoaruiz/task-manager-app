import type { ComponentProps } from 'react'

export type TaskListItemProps = ComponentProps<'li'>
export type TaskListItemTitleProps = ComponentProps<'h2'>
export type TaskListItemGroupProps = ComponentProps<'div'>
export type TaskListItemStatusProps = ComponentProps<'div'> & {
  completed: boolean
}
