// react icons
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {

    const { deleteItem } = useContext(TodoItemsContext)

    return (
        <div className="container">
            <div className="row shubhamRow">
                <div className="col-4">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-4">
                    <button type="button" className="btn btn-danger ShubhamBtn" onClick={() => deleteItem(todoName)}><MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem