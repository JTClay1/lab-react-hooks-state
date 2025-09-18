import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { act } from 'react'; // Use React.act

test('toggles dark mode on button click', () => {
  render(<App />);
  const toggleBtn = screen.getByRole('button', { name: /Switch to Light Mode/i });
  expect(toggleBtn).toBeInTheDocument();
  act(() => {
    fireEvent.click(toggleBtn);
  });
  expect(screen.getByRole('button', { name: /Switch to Dark Mode/i })).toBeInTheDocument();
});

test('filters products by category', () => {
  render(<App />);
  const dropdown = screen.getByRole('combobox');
  fireEvent.change(dropdown, { target: { value: 'Fruits' } });
  expect(screen.getByText('Apples')).toBeInTheDocument();
  expect(screen.queryByText('Milk')).not.toBeInTheDocument();
});

test('displays message when no products match filter', () => {
  render(<App />);
  const dropdown = screen.getByRole('combobox');
  fireEvent.change(dropdown, { target: { value: 'NonExistent' } });
  expect(screen.getByText(/no products available/i)).toBeInTheDocument();
});

test('adds items to cart', () => {
  render(<App />);
  const appleBtn = screen.getByTestId('product-3'); // Matches Apples' id
  act(() => {
    fireEvent.click(appleBtn);
  });
  expect(screen.getByText('1 Apples')).toBeInTheDocument();
});