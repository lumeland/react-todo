import { classNames, React } from "../deps.ts";

const ALL_TODOS = "all";
const ACTIVE_TODOS = "active";
const COMPLETED_TODOS = "completed";

export interface Props {
  count: number;
  filter: "all" | "active" | "completed";
  completedCount: number;
  onClearCompleted: () => void;
}

export default function Footer(
  { count, onClearCompleted, filter, completedCount }: Props,
) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> {count === 1 ? "item" : "items"} left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={classNames({ selected: filter === ALL_TODOS })}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={classNames({ selected: filter === ACTIVE_TODOS })}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={classNames({
              selected: filter === COMPLETED_TODOS,
            })}
          >
            Completed
          </a>
        </li>
      </ul>
      {!!(completedCount > 0) && (
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
}
