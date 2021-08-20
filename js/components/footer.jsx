import { classNames, React } from "../deps.ts";

const ALL_TODOS = "all";
const ACTIVE_TODOS = "active";
const COMPLETED_TODOS = "completed";

export default class TodoFooter extends React.Component {
  render() {
    const { count, onClearCompleted, nowShowing, completedCount } = this.props;

    const clearButton = completedCount > 0
      ? (
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )
      : null;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong> {count === 1 ? "item" : "items"} left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={classNames({ selected: nowShowing === ALL_TODOS })}
            >
              All
            </a>
          </li>{" "}
          <li>
            <a
              href="#/active"
              className={classNames({ selected: nowShowing === ACTIVE_TODOS })}
            >
              Active
            </a>
          </li>{" "}
          <li>
            <a
              href="#/completed"
              className={classNames({
                selected: nowShowing === COMPLETED_TODOS,
              })}
            >
              Completed
            </a>
          </li>
        </ul>
        {clearButton}
      </footer>
    );
  }
}
