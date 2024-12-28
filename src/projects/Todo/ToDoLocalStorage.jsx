const toDoItem = "toDoItem";
export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(toDoItem);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};

export const setLocalStorageTodoData = (task) => {
  localStorage.setItem(toDoItem, JSON.stringify(task));
};
