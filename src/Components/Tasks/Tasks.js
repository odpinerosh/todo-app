import React from "react";
import Card from "../Card";

const Tasks = props => {
    let taskList = <h2>No hay tareas. Añada algunas...</h2>;

    let content = taskList;

    return (
        <Card addClass='taskList'>
            <div>{content}</div>
        </Card>
    );

}

export default Tasks;