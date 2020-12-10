
import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Payment from '../Components/Payment';
// import Location from '../Components/Location';
import '../style/loginform.css';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: "",
      password: "",
      passErr:"",
      email:"",
      redirect:false,
      longitude:"",
      latitude:"",
  }
  }
  SetRedirect=()=>{
  this.setState({
    redirect:true
  })
  }
  componentDidMount(){
  axios.get('/api/user').then(response=>{
    console.log(response)
  }).catch(error=>{
    console.log(error);
  });
  }
  SetStateLogin=()=>{
  this.setState({
    loggedIn:true
  })
  }
  renderRedirect = ()=>{
  if(this.state.redirect){
    return <Redirect to='/Register' />
  }
  }
  handleChange = ({ target }) => {
    this.setState({ ...this.state, [target.name]: target.value });
  };
 
  location=()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
}
  onSubmit = e => {
    e.preventDefault();
    var error = [];
    if(this.state.email == ''){
     this.setState({
         emailErr: 'Please enter your email.',
     });
     error.push("Email error");
           
     }else{
         this.setState({
             emailErr: '',
         });
     }
     var error = [];
     if(this.state.password == ''){
      this.setState({
          passErr: 'Please enter your password',
      });
      error.push("Password error");
            
      }else{
          this.setState({
              passErr: '',
          });
      }

    axios.defaults.withCredentials=true;
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post("/login",this.state).then(res => {
       console.log("logged in :",res);
       sessionStorage.setItem('loggedIn',true);
       this.props.history.push('/HomePage');
       this.SetStateLogin();
       this.SetRedirectHome();
        
      }).catch(error=>{
        console.log(error);
      });
    });

  };
  handleClickOpenP = () => {
      this.setState({setOpen:true});
    };
    
    closeDialogP = () => {
    this.setState({setOpen: false});
  };
  // handleClickOpen = () => {
  //   this.setState({setOpen:true});
  // };

  // closeDialog = () => {
  //   this.setState({setOpen: false});
  // };
  render(){
  //   if(this.state.setOpen) {
  //     return <Location openD={this.state.setOpen} closeD={this.closeDialog}/>
  // }
  if(this.state.setOpen){
    return <Payment openDP={this.state.setOpen} closeDP={this.closeDialogP}/>
  }
    return (
    <>
     
  <div className="App">
  <div class="container" id="container">
    <div class="form-container sign-up-container">
      <form action="#">
        <h1 style={{color:"#595959"}}>Sign Up</h1>
        <br />
        <input type="text" name ="first_name" placeholder="First Name"  />
        <input type="text" name ="last_name"  placeholder="Last Name"/>
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="phone" placeholder="Phone" />
        <input type="date" name="date_of_birth" placeholder="Date of birth" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="password_confirmation" placeholder=" Confirm Password" />
        {/* <a onClick={this.handleClickOpen}>
         Choose Location
        </a> */}
        <a onClick={this.handleClickOpenP}>
          Click here  to enter your credit details
        </a>
        <button>Sign Up</button>
        <br />
      </form>
    </div>
    <div class="form-container sign-in-container">
      <form action="#">
        <h1 style={{color:"#595959"}}>Sign in</h1>
        <br />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button>Sign In</button>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button class="ghost" id="signIn" onClick={()=>{
          const container = document.getElementById('container');
          container.classList.remove("right-panel-active");
        }}>Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button class="ghost" id="signUp" onClick={()=>{
          const container = document.getElementById('container');
          container.classList.add("right-panel-active");
        }}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
      </div>
      </>
  );
  }
}
export default Login;
