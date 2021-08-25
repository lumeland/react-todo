import { React } from "../deps.ts";
import TodoHeader from "./header.tsx";
import TodoFooter from "./footer.tsx";
import TodoItem from "./todo_item.tsx";
import Model from "../model.ts";

const { useEffect, useState } = React;

const ALL_TODOS = "all";
const ACTIVE_TODOS = "active";
const COMPLETED_TODOS = "completed";

export interface State {
  filter: "all" | "active" | "completed";
  newTodo: string;
}

export interface Props {
  model: Model;
}

export default function App({ model }: Props) {
  const [state, setState] = useState<State>({
    filter: ALL_TODOS,
    newTodo: "",
  });

  useEffect(() => {
    // @ts-ignore: Router object is global
    const router = new Router({
      "/": () => setState({ ...state, filter: ALL_TODOS }),
      "/active": () => setState({ ...state, filter: ACTIVE_TODOS }),
      "/completed": () => setState({ ...state, filter: COMPLETED_TODOS }),
    });
    router.init("/");
  }, []);

  const todos = model.todos;

  const shownTodos = todos.filter(function (todo) {
    switch (state.filter) {
      case ACTIVE_TODOS:
        return !todo.completed;
      case COMPLETED_TODOS:
        return todo.completed;
      default:
        return true;
    }
  });

  const activeTodoCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeTodoCount;

  return (
    <div>
      <TodoHeader onCreate={(val: string) => model.addTodo(val)} />

      {!!todos.length && (
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={(ev) => model.toggleAll(ev.target.checked)}
            checked={activeTodoCount === 0}
          />
          <label
            htmlFor="toggle-all"
          />
          <ul className="todo-list">
            {shownTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                onChangeTitle={(title) => model.save(todo, title)}
                completed={todo.completed}
                onChangeCompleted={(completed) =>
                  model.changeCompleted(todo, completed)}
                onDestroy={() => model.destroy(todo)}
              />
            ))}
          </ul>
        </section>
      )}

      {!!(activeTodoCount || completedCount) && (
        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          filter={state.filter}
          onClearCompleted={() => model.clearCompleted()}
        />
      )}
    </div>
  );
}
