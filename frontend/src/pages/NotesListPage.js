import 
    React, 
    {
        useState,
        useEffect
    }
from 'react'
import ListItem from '../components/ListItem'
import {Link} from 'react-router-dom'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        getNotes()
    }, [])

    let getNotes = async () => {
        // let response = await fetch('http://127.0.0.1:9000/api/notes/')
        let response = await fetch('/api/notes/')
        let data = await response.json()
        // console.log('DATA:', data)
        setNotes(data)
    }

    return (
            <div className="notes">
                <div className='notes-header'>
                    <h2 className='notes-title'>&#9782; Notes</h2>
                    <p className='notes-count'>{notes.length}</p>
                </div>

                <div className='notes-list'>

                {notes.map((note, index) => {
                        return(
                            <ListItem key={index} note={note} />
                            )
                        })}
                </div>
                <AddButton />
            </div>
        )
}

export default NotesListPage