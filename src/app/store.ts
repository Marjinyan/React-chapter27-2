import StudentListReducer from '../features/StudentList/StudentList.slice'
import SubjectListReducer from '../features/SubjectList/SubjectList.slice'
import NavbarReducer from '../features/Navbar/Navbar.slice'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

const root = combineReducers({
    students:StudentListReducer,
    subjects:SubjectListReducer,
    navbar:NavbarReducer
})

export const store = configureStore({reducer:root})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>