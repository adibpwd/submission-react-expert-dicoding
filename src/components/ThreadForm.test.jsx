/**
 * skenario testing
 *
 * - ThreadForm component
 *   - should handle title typing correctly
 *   - should handle body typing correctly
 *   - should handle category typing correctly
 *   - should call create function when create button is clicked
 */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { 
    describe, it, expect, afterEach, vi,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadForm from './ThreadForm';

expect.extend(matchers);

describe('ThreadForm component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle title typing correctly', async () => {
        // Arrange
        render(<ThreadForm onSubmit={() => {}} />);
        const titleInput = await screen.getByPlaceholderText('Title');

        // Action
        await userEvent.type(titleInput, 'Test input 1');

        // Assert
        expect(titleInput).toHaveValue('Test input 1');
    });
   
    it('should handle body typing correctly', async () => {
        // Arrange
        render(<ThreadForm onSubmit={() => {}} />);
        const bodyInput = await screen.getByPlaceholderText('Body');

        // Action
        await userEvent.type(bodyInput, 'Test input 1');

        // Assert
        expect(bodyInput).toHaveValue('Test input 1');
    });

    it('should handle category typing correctly', async () => {
        // Arrange
        render(<ThreadForm onSubmit={() => {}} />);
        const categoryInput = await screen.getByPlaceholderText('Category');

        // Action
        await userEvent.type(categoryInput, 'cat1');

        // Assert
        expect(categoryInput).toHaveValue('cat1');
    });

    it('should call create function when create button is clicked', async () => {
        // Arrange
        const mockThread = vi.fn();
        render(<ThreadForm onSubmit={mockThread} />);
        const titleInput = await screen.getByPlaceholderText('Title');
        await userEvent.type(titleInput, 'Test input 1');
        const bodyInput = await screen.getByPlaceholderText('Body');
        await userEvent.type(bodyInput, 'Test input 1');
        const categoryInput = await screen.getByPlaceholderText('Category');
        await userEvent.type(categoryInput, 'cat1');
        const threadButton = await screen.getByRole('button', { type: 'submit' });

        // Action
        await userEvent.click(threadButton);

        // Assert
        expect(mockThread).toBeCalledWith({
            title: 'Test input 1',
            body: 'Test input 1',
            category: 'cat1',
        });
    });
});
