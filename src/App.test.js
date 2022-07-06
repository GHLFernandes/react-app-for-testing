import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('it display a list of users', async () => {
    render(<App />);

    const userList = await waitFor(() => screen.getByTestId('user-list'));
    expect(userList).toBeInTheDocument();
  });
})
