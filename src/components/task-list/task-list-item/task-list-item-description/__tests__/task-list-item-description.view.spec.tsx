import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TaskListItemDescriptionView } from '../task-list-item-description.view'

describe('TaskListItemDescriptionView', () => {
  it('should able to render correctly', () => {
    render(
      <TaskListItemDescriptionView>
        Task description
      </TaskListItemDescriptionView>,
    )

    expect(screen.getByText('Task description')).toBeVisible()
  })
})
