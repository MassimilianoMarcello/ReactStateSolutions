import { type RouteConfig, index, route } from "@react-router/dev/routes";
import TodoUseState from "./routes/TodoUseState";
import TodoUseReducer from "./routes/TodoUseReducer";
import TodoUseContext from "./routes/TodoUseContext";
import TodoRedux from "./routes/TodoRedux";
import TodoZustand from "./routes/TodoZustand";
import TodoJotai from "./routes/TodoJotai";

export default [
  index("routes/home.tsx"),
  route("todo-usestate", "routes/TodoUseState.tsx"),
  route("todo-usereducer", "routes/TodoUseReducer.tsx"),
  route("todo-usecontext", "./routes/TodoUseContext.tsx"),
  route("todo-redux", "./routes/TodoRedux.tsx"),
  route("todo-zustand", "./routes/TodoZustand.tsx"),
  route("todo-jotai", "./routes/TodoJotai.tsx"),
] satisfies RouteConfig;

