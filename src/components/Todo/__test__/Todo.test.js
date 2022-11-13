import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const butttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(butttonElement);
  });
};

describe("Todo", () => {
  it("should render 1 Todo", () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render 3 Todos", () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping", "Tidy my living room", "Do homework"]);

    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });
    
  it("should not have completed class when initially rendered", () => {
     render(<MockTodo />);
     addTasks(["Go Grocery Shopping"]);
     const divElement = screen.getByText(/Go grocery shopping/i);
     expect(divElement).not.toHaveClass("todo-item-active");
  });
 
    it("should have completed class when clicked", () => {
     render(<MockTodo />);
     addTasks(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/Go grocery shopping/i);
        
        fireEvent.click(divElement);
     expect(divElement).toHaveClass("todo-item-active");
  });
});
