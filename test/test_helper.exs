ExUnit.start

Mix.Task.run "ecto.create", ~w(-r TodoEx.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r TodoEx.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(TodoEx.Repo)

