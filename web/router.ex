defmodule TodoEx.Router do
  use TodoEx.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", TodoEx do
    pipe_through :api

    resources "/todos", TodoController, except: [:new, :edit]
  end

  scope "/", TodoEx do
    pipe_through :browser # Use the default browser stack

    get "*path", PageController, :index
  end

end
