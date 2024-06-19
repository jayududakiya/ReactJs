import { useEffect, useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";


function App() {

  function getLocalStoreData () {
    const localListData = localStorage.getItem('ReactTodoList')
    if(localListData){
      return JSON.parse(localStorage.getItem('ReactTodoList'));
    }else{
      return [];
    }
  }

  const [inputVal, setInputVal] = useState("");
  const [todoData, setTodoData] = useState(getLocalStoreData());
  const [btnState, setBtnState] = useState(true);
  const [editTodoId, setEditTodoId] = useState(null);
  

  useEffect(()=>{
    localStorage.setItem("ReactTodoList",JSON.stringify(todoData))
  },[todoData])

  return (
    <div className="mx-auto min-h-svh bg-zinc-900">
      <Form
        inputVal={inputVal}
        setInputVal={setInputVal}
        todoData={todoData}
        setTodoData={setTodoData}
        btnState={btnState}
        setBtnState={setBtnState}
        editTodoId={editTodoId}
        setEditTodoId={setEditTodoId}
      />
      <TodoList
        todoData={todoData}
        setTodoData={setTodoData}
        setInputVal={setInputVal}
        setBtnState={setBtnState}
        editTodoId={editTodoId}
        setEditTodoId={setEditTodoId}
        btnState={btnState}
      />
    </div>
  );
}

export default App;
