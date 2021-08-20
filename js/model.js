export default class TodoModel {
  onChanges = [];

  constructor(key) {
    this.key = key;
    this.todos = store(key);
  }

  subscribe(onChange) {
    this.onChanges.push(onChange);
  }

  inform() {
    store(this.key, this.todos);
    this.onChanges.forEach((cb) => cb());
  }

  addTodo(title) {
    this.todos = this.todos.concat({
      title: title,
      completed: false,
    });
    this.inform();
  }

  toggleAll(checked) {
    // Note: it's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map() and filter() everywhere instead of mutating the array or
    // todo items themselves.
    this.todos = this.todos.map(function (todo) {
      return Object.assign({}, todo, { completed: checked });
    });

    this.inform();
  }

  toggle(todoToToggle) {
    this.todos = this.todos.map(function (todo) {
      return todo !== todoToToggle
        ? todo
        : Object.assign({}, todo, { completed: !todo.completed });
    });

    this.inform();
  }

  destroy(todo) {
    this.todos = this.todos.filter((candidate) => candidate !== todo);

    this.inform();
  }

  save(todoToSave, text) {
    this.todos = this.todos.map(function (todo) {
      return todo !== todoToSave
        ? todo
        : Object.assign({}, todo, { title: text });
    });

    this.inform();
  }

  clearCompleted() {
    this.todos = this.todos.filter(function (todo) {
      return !todo.completed;
    });

    this.inform();
  }
}

function store(namespace, data) {
  if (typeof Deno !== "undefined") {
    return [];
  }

  if (data) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }

  var store = localStorage.getItem(namespace);
  return (store && JSON.parse(store)) || [];
}
