import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../store/action";
import { updateStudent } from "../store/action";

export const StudentList = () => {
    const studentList = useSelector((state) => state)
    const dispatch = useDispatch();
    const [newName, setNewName] = useState("")

    const handleDelete = (student) => {
        dispatch(deleteStudent(student.id));
    };

    const handleUpdate = (studentId) => {
        dispatch(updateStudent(studentId, newName));
        setNewName("");
    };

    const handleChange = (event) => {
        setNewName(event.target.value);
    };

    const sortedStudentList = studentList.slice().sort((a, b) => a.name.localeCompare(b.name));

    return (
        <List>
            {sortedStudentList.length ? sortedStudentList.map((student, index) => (
                <ListItem key={index}>
                    <ListItemText primary={student.name} />
                    <Button variant="contained" onClick={() => handleDelete(student.id)}>
                        Удалить студента
                    </Button>
                    <TextField value={newName} onChange={handleChange} />
                    <Button variant="contained" onClick={() => handleUpdate(student.id)}>
                        Изменить имя
                    </Button>
                </ListItem>
            )) : <h2>Список пустой!</h2>}
        </List>
    )
}