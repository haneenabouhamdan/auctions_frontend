import React from 'react';
import Navbar from '../Components/Navbar'
import Slideshow from '../Components/Slideshow'
class welcomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return (
            <div className="home">
                <Navbar/>
            <Slideshow/>
            </div>
        )
    }
}
export default welcomePage;