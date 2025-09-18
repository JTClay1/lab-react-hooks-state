import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { act } from 'react'; // Use React.act instead of ReactDOMTestUtils.act

// Sample products for testing (fixing the undefined 'sampleProducts' error)
const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Milk', category: 'Dairy' },
];

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
  const appleBtn = screen.getByTestId('product-1'); // Use the correct id from sampleProducts
  act(() => {
    fireEvent.click(appleBtn);
  });
  expect(screen.getByText('1 Apple')).toBeInTheDocument(); // Match the quantity display
});