import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TaskListItemDeleteButtonViewModel } from '../task-list-item-delete-button.viewmodel'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false },
  },
})

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('TaskListItemDeleteButtonViewModel', () => {
  it('should not render when isVisible is false', () => {
    const { container } = render(
      <TaskListItemDeleteButtonViewModel taskId="1" isVisible={false} />,
      {
        wrapper,
      },
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('should not render when isVisible is true', () => {
    const { container } = render(
      <TaskListItemDeleteButtonViewModel taskId="1" isVisible={true} />,
      {
        wrapper,
      },
    )
    expect(container).not.toBeEmptyDOMElement()
    const button = screen.getByLabelText('delete task')
    expect(button).toBeVisible()
  })
})
