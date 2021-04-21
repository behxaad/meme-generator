import React from "react";
import Header from "./Header"
import MemeGenerator from "./MemeGenerator";
import "./index.css"

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header />
                <MemeGenerator />
            </div>
        )
    }
}

export default App