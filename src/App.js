import React, { useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './style.css'

const App = () => {
  const [input, setInput] = useState("");
  const [addItem, setAddItem] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleClick = () => {
    setAddItem((oldItems)=>{
      return [...oldItems, input];
    });
    setInput("");
  };

  const handleDelete = (id) => {
    setAddItem((oldItems)=> {
      return oldItems.filter((arrElement, index)=> {
        return index !== id;
      });
    })
  };

  return(
    <>
    <div className="main_div">
      <div className="center_div">
          <h1>ToDo Lists</h1>
          <input type="text" value={input} placeholder="Add a items" onChange={handleChange} />
          <button onClick={handleClick}> + </button>
            {/* <li>{input}</li> */}
          {/* <ol> */}
            {addItem.map((items)=>{
              return <li key={items.id}>               
                <HighlightOffIcon className='icon' onClick={handleDelete} />
                {items}</li>
            })}
          {/* </ol> */}
      </div>
    </div>
    </>
  )
}
export default App;