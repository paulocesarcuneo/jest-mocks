import { render, screen, act } from "@testing-library/react";
import Counter from "./Counter";

beforeEach(() => {
  jest.useFakeTimers();
});

test("renders learn react link", () => {
  render(<Counter />);
  act(() => {
    const button = screen.getByRole("button", { name: "+1" });
    button.click();
    button.click();
  });
  expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
});

test("renders learn react link", async () => {
  render(<Counter />);
  act(() => {
    const button = screen.getByRole("button", { name: "+1async" });
    button.click();
  });
  act(() => {
    jest.runAllTimers();
  });
  expect(await screen.findByText(/Count: 1/i)).toBeInTheDocument();
});

jest.mock();
