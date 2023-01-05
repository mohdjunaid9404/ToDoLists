import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Todolist = (props) => {
    return(
        <>
        <div>
        {/* <li key={items.id}>                */}
                <HighlightOffIcon className='icon' onClick={handleDelete} />
                </div>
                
                <li key={items.id}>{items}</li>
        </>
    )
}
export default Todolist;