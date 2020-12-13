import React from 'react';
import Navbar from '../Components/Navbar'
// import Map from '../Components/Maps'
import Slideshow from '../Components/Slideshow'
// import InitMap from '../Components/Maps';
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
                {/* <Map/> */}
            </div>
        )
    }
}
export default welcomePage;