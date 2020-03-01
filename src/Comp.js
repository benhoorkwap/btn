import React, { createRef } from 'react'




class Comp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Welcome'
        }

        this.onClick = this.onClick.bind(this)

        this.inputRef = createRef();


    }

    

    onClick(){
     this.inputRef.current.focus();
    }


    // render 
    render() {
        return(
            <div>
                <input ref={this.inputRef} ></input>
            <button onClick={this.onClick}>Focus</button>

            </div>
            
        )
    }
}


export default Comp;