import { useRouter, useSearch } from '@tanstack/react-router'

export function useTaskListFilterFormModel() {
  const router = useRouter()
  const { title, description, completedStatus, pendingStatus } = useSearch({
    strict: false,
  })

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const completedStatus = formData.get('completedStatus') as string
    const pendingStatus = formData.get('pendingStatus') as string

    router.navigate({
      to: '/tasks',
      search: {
        title: title || undefined,
        description: description || undefined,
        completedStatus: completedStatus ? 'true' : undefined,
        pendingStatus: pendingStatus ? 'true' : undefined,
      },
    })
  }

  return {
    title,
    description,
    completedStatus,
    pendingStatus,
    handleFormSubmit,
  }
}
