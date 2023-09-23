import { GET_STUDENTS, ADD_STUDENTS, DELETE_STUDENT, UPDATE_STUDENT } from "./actionTypes";

export const getStudentList = () => {
    return {
        type: GET_STUDENTS,
        payload: null,
    }
}
export const addNewStudent = (student) => {
    return {
        type: ADD_STUDENTS,
        payload: student
    }
}
export const deleteStudent = (student) => {
    return {
        type: DELETE_STUDENT,
        payload: student.id
    }
}
export const updateStudent = (studentId, newName) => {
    return {
        type: UPDATE_STUDENT,
        payload: {
            id: studentId,
            name: newName
        }
    }
}
