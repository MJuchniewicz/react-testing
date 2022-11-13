import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});


it("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: {value : "Go Grocery Shopping"} })
  expect(inputElement.value).toBe("Go Grocery Shopping");
});

it("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const butttonElement = screen.getByRole('button', { name: /Add/i } )
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(butttonElement);
  expect(inputElement.value).toBe("");
});
