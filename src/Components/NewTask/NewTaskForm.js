import React from "react";
import './NewTaskForm.css';

const NewTaskForm = props => {

    return (
        <form className="newTaskForm">
            <input type="text"></input>
            <button>Añadir tarea</button>
        </form>
    );

}

export default NewTaskForm;