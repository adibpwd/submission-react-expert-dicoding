/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { 
    describe, it, expect, afterEach, vi,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './LoginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle email typing correctly', async () => {
        // Arrange
        render(<LoginInput login={() => {}} />);
        const emailInput = await screen.getByPlaceholderText('email');

        // Action
        await userEvent.type(emailInput, 'adibtambak8@gmail.com');

        // Assert
        expect(emailInput).toHaveValue('adibtambak8@gmail.com');
    });

    it('should handle password typing correctly', async () => {
        // Arrange
        render(<LoginInput login={() => {}} />);
        const passwordInput = await screen.getByPlaceholderText('password');

        // Action
        await userEvent.type(passwordInput, '@Password1');

        // Assert
        expect(passwordInput).toHaveValue('@Password1');
    });

    it('should call login function when login button is clicked', async () => {
        // Arrange
        const mockLogin = vi.fn();
        render(<LoginInput login={mockLogin} />);
        const emailInput = await screen.getByPlaceholderText('email');
        await userEvent.type(emailInput, 'adibtambak8@gmail.com');
        const passwordInput = await screen.getByPlaceholderText('password');
        await userEvent.type(passwordInput, '@Password1');
        const loginButton = await screen.getByRole('button', { type: 'submit' });

        // Action
        await userEvent.click(loginButton);

        // Assert
        expect(mockLogin).toBeCalledWith({
            email: 'adibtambak8@gmail.com',
            password: '@Password1',
        });
    });
});
