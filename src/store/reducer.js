import { ADD_STUDENTS, DELETE_STUDENT, GET_STUDENTS, UPDATE_STUDENT } from "./actionTypes";

const initialState = []

export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENTS:
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
                course: action.payload.course
            }]
        case DELETE_STUDENT:
            return state.map(student => {
                if (student.id === action.payload.id) {
                    return {
                        ...student,
                        name: action.payload.name // Установите пустое имя
                    };
                }
                return student;
            });
        case UPDATE_STUDENT:
            return state.map(student => {
                if (student.id === action.payload.id) {
                    return {
                        ...student,
                        name: action.payload.name
                    };
                }
                return student;
            })
        case GET_STUDENTS:
            return [...state].sort((a, b) => a.name.localeCompare(b.name));
        default:
            return state
    }
}
