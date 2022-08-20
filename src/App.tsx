import './App.css';
import { useAppSelector } from './app/types';
import Book from './features/Book/Book';
import Navbar from './features/Navbar/Navbar';
import StudentList from './features/StudentList/StudentList';
import SubjectList from './features/SubjectList/SubjectList';

function App() {
  const activePage = useAppSelector(state => state.navbar.activePage)
  return (
    <div className="App">
      <Navbar />
      {
        activePage === 'Subjects'
          ?  <SubjectList />
          : (
            activePage === 'Students'
              ? <StudentList />
              : <Book />
          )
      }
    </div>
  );
}

export default App;
