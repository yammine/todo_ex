defmodule TodoEx.TodoView do
  use TodoEx.Web, :view

  def render("index.json", %{todos: todos}) do
    %{todos: render_many(todos, TodoEx.TodoView, "todo.json")}
  end

  def render("show.json", %{todo: todo}) do
    render_one(todo, TodoEx.TodoView, "todo.json")
  end

  def render("todo.json", %{todo: todo}) do
    %{id: todo.id,
      title: todo.title,
      done: todo.done}
  end
end
