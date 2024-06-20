import React , {useContext} from "react";
import { useSelector , useDispatch} from "react-redux";
import { removeTodo,editTodo } from "../features/todo/todoSlice";
import { HANDELBTNS } from "../App";

function Todos() {

  const {setBtnState} =  useContext(HANDELBTNS)

  // console.log('btnState', btnState);

  const dispatch  = useDispatch()

  const Todos = useSelector(state => state.todos)

  const handelEditTodo = (id) => {
    dispatch(editTodo(id))
    setBtnState(true)
  }

  return (
    <div className="overflow-x-auto">
            <ul>
              {Todos.map(todo => (
                <li key={todo.id} className="whitespace-nowrap px-4 py-1 text-gray-700 border rounded-md flex items-center justify-between gap-2 mb-2">
                {todo.text}
                <button onClick={()=>handelEditTodo(todo.id)} className="border p-1  text-lg text-center bg-purple-950 text-white rounded-md ms-auto">O</button>
                <button onClick={()=>dispatch(removeTodo(todo.id))} className="border p-1  text-lg text-center bg-purple-950 text-white rounded-md">X</button>
              </li>
              ))}
              
            </ul>
    </div>
  );
}

export default Todos;
