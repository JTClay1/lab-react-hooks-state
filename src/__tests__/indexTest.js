import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import App from "../App";

test("toggles dark mode on button click", () => {
  render(<App />);
  // Thanks to aria-label="toggle theme", this matches /toggle/i
  const toggleBtn = screen.getByRole("button", { name: /toggle/i });
  expect(toggleBtn).toBeInTheDocument();

  // Click and verify the visible label flips
  act(() => {
    fireEvent.click(toggleBtn);
  });
  expect(
    screen.getByRole("button", { name: /toggle/i })
  ).toHaveTextContent(/switch to dark mode/i);
});

test("filters products by category", () => {
  render(<App />);
  const dropdown = screen.getByRole("combobox", { name: /category filter/i });
  fireEvent.change(dropdown, { target: { value: "Fruits" } });

  expect(screen.getByText("Apples")).toBeInTheDocument();
  expect(screen.queryByText("Milk")).not.toBeInTheDocument();
});

test("displays message when no products match filter", () => {
  render(<App />);
  const dropdown = screen.getByRole("combobox", { name: /category filter/i });
  fireEvent.change(dropdown, { target: { value: "NonExistent" } });

  expect(screen.getByText(/no products available/i)).toBeInTheDocument();
});

test("adds items to cart", () => {
  render(<App />);
  // ProductItem renders data-testid="product-<id>", and Apples has id=3
  const appleBtn = screen.getByTestId("product-3");
  act(() => {
    fireEvent.click(appleBtn);
  });
  expect(
    screen.getByText("Apples is in your cart. (x1)")
  ).toBeInTheDocument();
});
