import React from 'react'

const ListItem = ({key, note}) => {
    console.log(note)
    return (
            <div>
                <h3>{note.body}</h3>
            </div>
        )
}

export default ListItem