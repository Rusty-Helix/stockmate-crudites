import React, {useState, useEffect} from 'react'
// import {useRef} from 'react'
// import {useLocation} from 'react'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {Link} from 'react-router-dom'

const NotePage = ({match}) => {

    let noteId = window.location.href.split('/').at(-1)
    const [note, setNote] = useState(null)

    useEffect(()=>{
        getNote()
    }, [noteId])
    
    let getNote = async () => {
        if (noteId==='new') return
        // let response = await fetch('http://127.0.0.1:9000/api/notes/')
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
        // console.log(data)
    }

    // // console.log(noteId)
    let createNote = async () => {
        // console.log('create note')
        fetch(`/api/notes/create/`, {
        // fetch(`/admin/api/note/add/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        // console.log('2create note2')
    }

    // console.log(noteId)
    let updateNote = async () => {
        fetch(`/api/notes/${noteId}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${noteId}/delete/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
    }

    let handleSubmitNote = () => {
        if(noteId !== 'new' && !note.body){
            deleteNote()
        }else if(noteId !== 'new'){
            updateNote()
        }else if(noteId === 'new' && note !== null){
            createNote()
        }
        // history.push('/')
    }

    return (
            <div className='note'>
                <div className='note-header'>
                    <h3>
                        <Link to='/'>
                            <ArrowLeft onClick={handleSubmitNote}/>
                        </Link>
                    </h3>

                    <Link to='/'>
                    {noteId !== 'new' ? (
                        <button onClick={deleteNote}>Delete</button>
                        ):(
                        <button onClick={handleSubmitNote}>Done</button> 
                    )}
                    </Link>
                    {/* <h1>Note body:{note?.body}</h1> */}
                </div>
                <textarea
                    onChange={(e)=>{setNote({...note, 'body': e.target.value})}}
                    defaultValue={note?.body}>
                </textarea>
            </div>
        )
}

export default NotePage