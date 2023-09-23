import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewStudent } from "../store/action";

export const StudentAddForm = (props) => {
    const [StudentId, setStudentId] = useState(0)
    const [StudentName, setStudentName] = useState('')
    const [StudentCourse, setStudentCourse]= useState('')
    const dispatch = useDispatch()

    const handleAddUser = () => {
        dispatch(addNewStudent({
            id: StudentId,
            name: StudentName,
            course: StudentCourse,
        }))
    
        
        setStudentId('')
        setStudentName('')
        setStudentCourse('')
    }
    
    return (
        <Box
            component="form"
            sx={{
                '& > : not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                variant="outlined"
                placeholder="id"
                value={StudentId}
                onChange={(e) => setStudentId(e.target.value)}
            />
            <TextField
                variant="outlined"
                placeholder="Имя студента"
                value={StudentName}
                onChange={(e) => setStudentName(e.target.value)}
            />
            <TextField
                variant="outlined"
                placeholder="Название курса"
                value={StudentCourse}
                onChange={(e) => setStudentCourse(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddUser}>
                Добавить студента
            </Button>
        </Box>
    )
}