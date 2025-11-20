import { Label } from '@radix-ui/react-label'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import type { TaskListFilterFormViewProps } from './task-list-filter-form.types'

export function TaskListFilterFormView({
  model,
  ...props
}: TaskListFilterFormViewProps) {
  const {
    title,
    description,
    completedStatus,
    pendingStatus,
    handleFormSubmit,
  } = model

  return (
    <div>
      <h1 className="text-3xl text-center">Tasks</h1>

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-5"
        {...props}
      >
        <Field>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Input
            type="title"
            id="title"
            name="title"
            autoComplete="off"
            defaultValue={title}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Input
            type="description"
            id="description"
            name="description"
            autoComplete="off"
            defaultValue={description}
          />
        </Field>

        <div className="flex flex-col gap-4">
          <FieldLabel>Status</FieldLabel>

          <div className="flex gap-4 items-center">
            <div className="flex gap-4 items-center">
              <Label htmlFor="completedStatus">Completed</Label>
              <Checkbox
                id="completedStatus"
                name="completedStatus"
                defaultChecked={!!completedStatus}
              />
            </div>
            <div className="flex gap-4 items-center">
              <Label htmlFor="pendingStatus">Pending</Label>
              <Checkbox
                id="pendingStatus"
                name="pendingStatus"
                defaultChecked={!!pendingStatus}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
