export default function ToDoItem({ text, id, dispatch, completed }) {
  return (
    <>
      <span
        onClick={() => dispatch({ type: 'mark-todo', payload: { id } })}
        style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'gray' : 'black' }}
      >
        {text}
      </span>
      <button onClick={() => dispatch({ type: 'delete-todo', payload: { id } })}>삭제</button>
    </>
  );
}
