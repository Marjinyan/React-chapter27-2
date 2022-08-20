import { List, ListItem, ListItemText, TextField }from '@mui/material'
import { KeyboardEvent, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/types'
import { addSubject } from './SubjectList.slice'

const SubjectList = () => {
    const subjects = useAppSelector(state => state.subjects)
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            dispatch(addSubject(text))
            setText('')
        }
    }

    return <div> 
        <h1>Subject List</h1>
        <TextField
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown = {handleKeyDown}
        />
        <List sx={{width:100,margin:"auto"}}>
            {
                subjects.map((elm,i) => {
                    return <ListItem key={i}>
                        <ListItemText
                            primary={elm}
                        />
                    </ListItem>
                })
            }
        </List>
    </div>
}
export default SubjectList