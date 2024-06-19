import { CirclePlus, SquarePen } from "lucide-react";

const Form = ({inputVal,todoData , setInputVal,setTodoData  , btnState , setBtnState , setEditTodoId , editTodoId }) => {

  function HandelInputChange (even) {
    setInputVal(even.target.value)
  }

  function HandelSubmit (even) {
    even.preventDefault()
    if(btnState)
    {
      setTodoData((prevVal)=>[...prevVal,{ id : new Date().getTime().toString() , text : inputVal, isCompleted : false}])
    }else{
      setTodoData(todoData.map((todo)=>{
        if(todo.id === editTodoId){
          return {
            ...todo,
            text :inputVal
          }
        }
        return todo
      }))
    }
    setBtnState(true)
    setEditTodoId(null)
    setInputVal('')
  }

  return (
    <div className="mx-auto max-w-md py-10">
      <form onSubmit={HandelSubmit} className="w-full flex items-stretch justify-between gap-2">
        <input
          type="text"
          className="border rounded-md text-lg py-1 px-2 w-full block"
          placeholder="Add Your Todo..."
          onChange={HandelInputChange}
          value={inputVal}
        />
        {btnState ? (
          <button
            type="submit"
            className="flex items-center justify-center w-8 px-1 rounded-md bg-black"
          >
            <CirclePlus className="text-white " />
          </button>
        ) : (
          <button className="flex items-center justify-center w-8 px-1 rounded-md bg-black">
            <SquarePen className="text-white " />
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
