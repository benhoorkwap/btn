import React, {useState} from 'react';
import './tile.css'




function Tile(props) {

    const [IsClicked, SetIsClicked] = useState(false);
    
    const handleClick = () => {
        // toDo
        const value = props.value;
        props.setClickedItem(value);

        // change state of `IsClicked`
        SetIsClicked(!IsClicked)
    }

    return(
        // If `IsClicked` is true, do nothing otherwise invoke `handleClick` event.
        <button className='App-tile' onClick= {IsClicked ? () => {} : handleClick}>{props.value}</button>
    )
}

export default Tile;