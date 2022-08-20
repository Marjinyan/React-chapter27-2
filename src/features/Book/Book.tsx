import { Table, TableCell, TableHead, TableBody, TableRow } from '@mui/material'
import { Student, useAppSelector, useAppDispatch } from '../../app/types'
import { addExamen } from '../StudentList/StudentList.slice'

const Book = () => {
    const students = useAppSelector(state => state.students)
    const subjects = useAppSelector(state => state.subjects)
    const dispatch = useAppDispatch()

    const rate = (index:number, subject:string) => {
        dispatch(addExamen([index, subject]))
    }

    return <div>
        <h1>Book</h1>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Student</TableCell>
                        {
                            subjects.map((elm,i) => {
                                return <TableCell key={i} className="verticalText">{elm}</TableCell>
                            })
                        }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    students.map((elm:Student,i) => {
                        return <TableRow key={i}>
                            <TableCell>{elm.name} {elm.surname}</TableCell>
                                {
                                    subjects.map((sub,j) => {
                                        let item = elm.examens.find(a => a.subject === sub)
                                        let text = item ? item.rate : ''
                                        return <TableCell key={j} onClick={() => rate(i, sub)}>
                                            <h3 style={{textAlign: 'center'}}>{text}</h3>
                                        </TableCell>
                                    } )
                                }
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </div>
}
export default Book