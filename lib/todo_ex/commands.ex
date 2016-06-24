defmodule TodoEx.Commands do
  use Protobuf, """
    message CreateTodo {
      required string title = 1;
      required bool done = 2;
    }
    message ToggleTodo {
      required int32 id = 1;
    }
    message DestroyTodo {
      required int32 id = 1;
    }
  """
end
