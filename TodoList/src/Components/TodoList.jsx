import { CircleCheck, CircleX, SquarePen } from "lucide-react";

const TodoList = ({ todoData  ,setTodoData , setInputVal , setBtnState , setEditTodoId ,btnState}) => {

  function HandelDelete (id) {
    setTodoData(todoData.filter(todo => todo.id !== id))
  }

  function HandelCheck (id) {
    setTodoData(todoData.map((todo)=>{
        if(todo.id === id){
            return {
                ...todo,
                isCompleted : !todo.isCompleted
            }
        }
        return todo
    }))
  }

  function HandelEdit (id) {
    const editTodoList = todoData.map(todo => {
        if(todo.id === id){
            setInputVal(todo.text)
        }
    })
    setEditTodoId(id)
    setBtnState(false)
  }





  return (
    <div className="mx-auto max-w-md py-10'">
      <hr />
      <ul className="w-full flex items-stretch justify-start flex-col gap-y-2 py-2 mt-4">
        {todoData.map((todo) => {
          return (
            <li key={todo.id} className={`${todo.isCompleted ? 'bg-black opacity-50' : 'bg-green-950 hover:bg-black'} border rounded-lg p-2 flex items-center justify-between transition-all`}>
              <p className={`${todo.isCompleted ? 'line-through' : ''} text-white text-lg`}>{todo.text}</p>
              <div className="flex items-center justify-center gap-2 text-yellow-400">
                <button onClick={btnState ? ()=>HandelCheck(todo.id) : null} className="flex items-center justify-center hover:text-white transition-all">
                  <CircleCheck />
                </button>
                <button onClick={todo.isCompleted ? null : ()=>HandelEdit(todo.id) } className="flex items-center justify-center hover:text-white transition-all">
                  <SquarePen />
                </button>
                <button onClick={()=>HandelDelete(todo.id)} className="flex items-center justify-center hover:text-white transition-all">
                  <CircleX />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
