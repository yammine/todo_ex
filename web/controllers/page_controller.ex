defmodule TodoEx.PageController do
  use TodoEx.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
