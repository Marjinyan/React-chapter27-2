import { List, ListItem, ListItemText, TextField } from '@mui/material'
import { Student, useAppDispatch, useAppSelector } from '../../app/types'
import { useState, KeyboardEvent} from 'react'
import { addStudent } from './StudentList.slice'

const StudentList = () => {
    const students = useAppSelector(state => state.students)
    const dispatch = useAppDispatch()
    const [text, setText] = useState('')

    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            const [name, surname] = text.split(' ')
            let stud = {name, surname, examens:[]} as Student
            dispatch(addStudent(stud))
            setText('')
        }
    }
    return <div>
        <h1>Student List</h1>
        <TextField
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <List sx={{width:200,margin:'auto'}}>
            {
                students.map((elm,i) => {
                return <ListItem key={i}>
                    <ListItemText
                    primary={elm.name+ ' '+elm.surname}
                    />
                </ListItem>
            })
        }
        </List>
    </div>
}
export default StudentList