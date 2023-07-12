import {
  render,
  screen,
  fireEvent,
  getByTestId,
  queryByTestId,
} from "@testing-library/react";
import App from "./App";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

test("renders todo app", () => {
  render(<App />);
  const title = screen.getByText(/ToDo/i);
  expect(title).toBeInTheDocument();
});

test("adds new todos", () => {
  const { container } = render(<App />);

  const todoText = "say hello to the world";
  fireEvent.change(screen.getByPlaceholderText(/What do you need to do\?/i), {
    target: { value: todoText },
  });

  expect(container.querySelector(".add-new-todo").value).toContain(todoText);

  fireEvent.click(screen.getByText(/\+/i));

  expect(container.querySelector(".todo-list").textContent).toContain(todoText);
  expect(container.querySelector(".add-new-todo").value).not.toContain(
    todoText
  );
	});

	describe("TodoList Component", () => {
		test("renders a list of todo items", () => {
			const todos = [
				{ id: 1, title: "Task 1", complete: false },
				{ id: 2, title: "Task 2", complete: true },
			];
	
			render(<TodoList todos={todos} />);
 
			const todoItems = screen.getAllByRole("listitem");
			expect(todoItems.length).toBe(2);
		});
	
		test("calls onComplete and onDelete functions when checkbox and title are clicked", () => {
			const mockOnComplete = jest.fn();
			const mockOnDelete = jest.fn();
	
			const todo = { id: 1, title: "Task 1", complete: false };
	
			render(
				<TodoItem
					id={todo.id}
					title={todo.title}
					complete={todo.complete}
					onComplete={mockOnComplete}
					onDelete={mockOnDelete}
				/> 
			);
	
			const checkbox = screen.getByRole("checkbox");
			const title = screen.getByText(todo.title);
	
			fireEvent.click(checkbox);
			expect(mockOnComplete).toHaveBeenCalledWith(todo.id);
	
			fireEvent.click(title);
			expect(mockOnDelete).toHaveBeenCalledWith(todo.id);
		});
	});
