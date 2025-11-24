import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { act, renderHook } from '@testing-library/react'
import { toast } from 'react-toastify'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { deleteTask } from '@/http/tasks/delete'
import { useTaskListItemDeleteButtonModel } from '../task-list-item-delete-button.model'

// TODO criar um utils para teste com react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false },
  },
})

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

// Mock do react-query deve estar no topo
vi.mock('@tanstack/react-query', async () => {
  const originalModule = await vi.importActual('@tanstack/react-query')

  return {
    ...originalModule,
    useQueryClient: () => ({
      getQueriesData: () => [],
      setQueryData: vi.fn(),
    }),
  }
})

vi.mock('@/http/tasks/delete')

describe('TaskListDeleteButtonModel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should able to show toast error when deleteTask fails', async () => {
    const toastErrorSpy = vi.spyOn(toast, 'error').mockImplementation(() => {
      return 'mocked-toast-id'
    })

    vi.mocked(deleteTask).mockRejectedValueOnce(
      new Error('Failed to delete the task'),
    )

    const { result } = renderHook(
      () => useTaskListItemDeleteButtonModel({ taskId: 'test-task-id' }),
      { wrapper },
    )

    act(() => result.current.deleteTask())

    await vi.waitFor(() => {
      expect(toastErrorSpy).toHaveBeenCalledWith(
        'Failed to delete the task. Please try again.',
        { position: 'top-center' },
      )
    })

    // toastErrorSpy.mockRestore()
  })

  it('should able not show toast error when deleteTask succeeds', async () => {
    const toastErrorSpy = vi.spyOn(toast, 'error').mockImplementation(() => {
      return 'mocked-toast-id'
    })

    vi.mocked(deleteTask).mockResolvedValueOnce(undefined)

    const { result } = renderHook(
      () => useTaskListItemDeleteButtonModel({ taskId: 'test-task-id' }),
      { wrapper },
    )

    act(() => result.current.deleteTask())

    await vi.waitFor(() => {
      expect(toastErrorSpy).not.toHaveBeenCalled()
    })
  })
})
