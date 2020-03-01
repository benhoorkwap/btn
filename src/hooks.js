import React, { createContext } from 'react';

import { useEffect, useState } from 'react';
import Tile from './tile'


const myThemes = {
    backgroundColor: '#222',
    foregroundColor: '#ae4467'
}


const ThemeContext = createContext(myThemes)


function Example(props) {


    const items = 3;

    const [currentWord, setCurrentWord] = useState('BENEDICT')
    const [clickedItem, setClickedItem] = useState('');

 
    console.log(clickedItem)

    
 
    return(
        // This outputs a collection of tile items.
        <div>
        {
            [...Array(currentWord.length)].map((value, index) => <Tile key={index} value={currentWord.charAt(index)} setClickedItem={setClickedItem}></Tile>)
        }
        </div>
        
    )
    
}



// Let's think about using a parent.

function Button(props) {
    return(
        <div>Click Me!</div>
    )
}


export default Example;