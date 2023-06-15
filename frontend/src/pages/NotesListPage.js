import 
    React, 
    {
        useState,
        useEffect
    }
from 'react'
import ListItem from '../components/ListItem'

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
            <div className="notes-list">
                {notes.map((note, index) => {
                        return(
                            <ListItem key={index} note={note} />
                        )
                })}
            </div>
        )
}

export default NotesListPage