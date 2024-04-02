import { useContext, useState } from "react"
import { TodoItemsContext } from "../store/todo-items-store";

import { MdOutlineAdd } from "react-icons/md";

function AddTodo() {

    const { addNewItem } = useContext(TodoItemsContext)

    const [todoName, setTodoName] = useState("")
    const [dueDate, setDueDate] = useState("")

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }
    const handleDataChange = (event) => {
        setDueDate(event.target.value)
    }

    const handleAddButtonClicked = () => {
        addNewItem(todoName, dueDate)
        setDueDate("")
        setTodoName("")
    }


    return (
        <div className="container ">
            <div className="row shubhamRow">
                <div className="col-4">
                    <input type="text" placeholder="Enter todo here" value={todoName} onChange={handleNameChange} />
                </div>
                <div className="col-4">
                    <input type="date" onChange={handleDataChange} value={dueDate} />
                </div>
                <div className="col-4">
                    <button type="button" onClick={handleAddButtonClicked} className="btn btn-success ShubhamBtn" ><MdOutlineAdd /></button>
                </div>
            </div>
        </div>
    )

}

export default AddTodo