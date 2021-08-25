export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default class Model {
  key: string;
  todos: Todo[];
  onChanges: (() => void)[] = [];

  constructor(key: string) {
    this.key = key;
    this.todos = readStore(key);
  }

  subscribe(onChange: (() => void)): void {
    this.onChanges.push(onChange);
  }

  inform() {
    writeStore(this.key, this.todos);
    this.onChanges.forEach((cb) => cb());
  }

  addTodo(title: string) {
    this.todos = this.todos.concat({
      id: (new Date()).getTime(),
      title: title,
      completed: false,
    });
    this.inform();
  }

  toggleAll(checked: boolean) {
    this.todos = this.todos.map((todo) => ({ ...todo, completed: checked }));
    this.inform();
  }

  changeCompleted(todoToToggle: Todo, completed: boolean) {
    this.todos = this.todos.map((
      todo,
    ) => (todo !== todoToToggle ? todo : { ...todo, completed }));
    this.inform();
  }

  destroy(todo: Todo) {
    this.todos = this.todos.filter((candidate) => candidate !== todo);
    this.inform();
  }

  save(todoToSave: Todo, text: string) {
    this.todos = this.todos.map((
      todo,
    ) => (todo !== todoToSave ? todo : { ...todo, title: text }));
    this.inform();
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.inform();
  }
}

function readStore(namespace: string): Todo[] {
  if (typeof Deno !== "undefined") {
    return [];
  }

  const store = localStorage.getItem(namespace);
  return (store && JSON.parse(store)) || [];
}

function writeStore(namespace: string, data: Todo[]): void {
  if (typeof Deno !== "undefined") {
    return;
  }

  localStorage.setItem(namespace, JSON.stringify(data));
}
