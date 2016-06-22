use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :todo_ex, TodoEx.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :todo_ex, TodoEx.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "christopher.yammine",
  password: "",
  database: "todo_ex_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
