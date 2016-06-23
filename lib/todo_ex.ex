defmodule TodoEx do
  use Application

  @event_store TodoEx.EventStore
  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    event_store_settings = Application.get_env(:todo_ex, :event_store)

    children = [
      # Start the endpoint when the application starts
      supervisor(TodoEx.Endpoint, []),
      # Start the Ecto repository
      supervisor(TodoEx.Repo, []),
      # Here you could define other workers and supervisors as children
      # worker(TodoEx.Worker, [arg1, arg2, arg3]),
      worker(Extreme, [event_store_settings, [name: @event_store]])
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: TodoEx.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    TodoEx.Endpoint.config_change(changed, removed)
    :ok
  end
end
