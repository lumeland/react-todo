import { classNames, React } from "../deps.ts";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editText: props.todo.title,
    };

    this.editField = React.createRef();
  }

  handleSubmit() {
    const val = this.state.editText.trim();
    if (val) {
      this.props.onSave(val);
      this.setState({ editText: val });
    } else {
      this.props.onDestroy();
    }
  }

  handleEdit() {
    this.props.onEdit();
    this.setState({ editText: this.props.todo.title });
  }

  handleKeyDown(event) {
    if (event.which === ESCAPE_KEY) {
      this.setState({ editText: this.props.todo.title });
      this.props.onCancel(event);
    } else if (event.which === ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  handleChange(event) {
    if (this.props.editing) {
      this.setState({ editText: event.target.value });
    }
  }

  /**
	 * Safely manipulate the DOM after updating the state when invoking
	 * `this.props.onEdit()` in the `handleEdit` method above.
	 * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
	 * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
	 */
  componentDidUpdate(prevProps) {
    if (!prevProps.editing && this.props.editing && this.editField.current) {
      const node = this.editField.current;
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  render() {
    return (
      <li
        className={classNames({
          completed: this.props.todo.completed,
          editing: this.props.editing,
        })}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
          />
          <label onDoubleClick={() => this.handleEdit()}>
            {this.props.todo.title}
          </label>
          <button className="destroy" onClick={this.props.onDestroy} />
        </div>
        <input
          ref={this.editField}
          className="edit"
          value={this.state.editText}
          onBlur={(ev) => this.handleSubmit(ev)}
          onChange={(ev) => this.handleChange(ev)}
          onKeyDown={(ev) => this.handleKeyDown(ev)}
        />
      </li>
    );
  }
}
