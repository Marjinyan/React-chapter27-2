import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState:string[] = [
    'Math', 'JS', 'OOP', 'DOM', 'React', 'Angular', 'Vue',
]

const SubjectListSlice = createSlice({
    name:'SubjectList',
    initialState,
    reducers:{
        addSubject:(state, action:PayloadAction<string>)=>{
            if(!action.payload || state.includes(action.payload)){
                return
            }
            state.push(action.payload)
        }
    }
})

export const {addSubject} = SubjectListSlice.actions
export default SubjectListSlice.reducer