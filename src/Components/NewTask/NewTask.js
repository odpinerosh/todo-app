import React from "react";
import Card from "../Card";
import NewTaskForm from "./NewTaskForm";

const NewTask = props => {

    return (
        <Card addClass='addTasks'>
            <NewTaskForm></NewTaskForm>
        </Card>
    )
}

export default NewTask;