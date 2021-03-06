import React from "react";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../style/User.css';
import '../style/Sidebar.css'
import UserSidebar from './UserSidebar'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import ListCountries from "./ListCountries";
import { MDBIcon } from "mdbreact";

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
          first_name:"",
          image:"",
          last_name:"",
          phone:"",
          password:"",
          balance:"",
          date_of_birth:"",
          email:"",
          openD:false,
          password_confirmation:""
        }
    }
    componentDidMount() {
        axios.defaults.withCredentials=true;
          axios.get('/api/user').then((response)=>{
             this.setState({
               first_name:response.data.first_name,
               last_name:response.data.last_name,
               email:response.data.email,
               password:response.data.password,
               phone:response.data.phone,
               balance:response.data.balance,
               date_of_birth:response.data.date_of_birth,
               image:response.data.image
             })
          })
    }
    handlechangeall = (event) =>{
        this.setState ( { [event.target.name] :event.target.value  } )
    }
    ChangePic =()=>{
      //dialog containing input file
      this.setState({
        openD:true
      })

    }
  
    addImage=(file)=>
    {
      this.setState({ 
        image: file[0],
      })
    }
    handleClose = () => {
        this.setState({openD: false});
      };
    onSubmit=(evt)=>{
      evt.preventDefault();
      const fd = new FormData();
      fd.append('image', this.state.image);
      axios.defaults.withCredentials=true;
          axios.post('/api/editImage',fd).then(res=>{
            // alert.name="res.message"
          })
          this.handleClose();
    }
    editProfile=()=>{
        let formData1={
            fist_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            phone:this.state.phone,
            password:this.state.password,
            balance:this.state.balance,
            date_of_birth:this.state.date_of_birth,
        }
          axios.defaults.withCredentials=true;
             axios.post('/api/users/edit',formData1).then((response)=>{
              console.log(response);
            })
        }
    render(){
        return(
            <div className="editProfile">
            <Row className="row"> 
            <UserSidebar/>
            <Col >
            <Card className="smallCard">
                <CardHeader style={{backgroundColor:"white",height:"300px"}}>
                <img className="image" src={this.state.image} />
              
                <Dialog open={this.state.openD} onClose={this.handleClose}  aria-labelledby="form-dialog-title">
                <DialogContent style={{width:"300px",height:"200px"}}>
                <input onChange={(e) => this.addImage(e.target.files) } type="file" id="image" ref="productimage" />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} className="dialogAct">
                    Cancel
                  </Button>
                  <Button onClick={this.onSubmit} className="dialogAct">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
                <Row>
                    <Col>
                    <a onClick={this.ChangePic}><label style={{fontSize:"10px"}}>Change Profile Picture</label></a>
                <h2><label>{this.state.first_name} {this.state.last_name}</label></h2></Col>
                </Row>
                </CardHeader>
                <CardBody>
                
                    <Row>
                        <Col><MDBIcon icon="gavel" style={{color:"#804000"}}/> My Bids</Col>
                        <Col><MDBIcon icon="trophy" style={{color:"#ffbb33"}}/> Won Bids</Col>
                        <Col><MDBIcon icon="heart" style={{color:"#cc3300"}}/> Favorites</Col>
                    </Row>
                    <Row>
                        <Col>0</Col>
                        <Col>0</Col>
                        <Col>0</Col>
                    </Row>
                </CardBody>
                </Card>    
            </Col>
            <Col>
              <Card className="card-user">
                <CardHeader style={{backgroundColor:"white"}}>
                  <CardTitle tag="h5">Account Details</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="px-1" md="5">
                        <FormGroup>
                          <label>First name</label>
                          <Input
                            defaultValue={this.state.first_name}
                            name="first_name"
                            onChange={this.handlechangeall}
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="5">
                        <FormGroup>
                          <label>Last name</label>
                          <Input
                            defaultValue={this.state.last_name}
                            name="last_name"
                            onChange={this.handlechangeall}
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col className="px-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email
                          </label>
                          <Input placeholder="Email" defaultValue={this.state.email}
                            name="email"
                            onChange={this.handlechangeall} type="email" />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Phone</label>
                          <Input
                            defaultValue={this.state.phone}
                            name="phone"
                            onChange={this.handlechangeall}
                            placeholder="Phone"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Balance
                          </label>
                          <Input placeholder="Balance" defaultValue={this.state.balance}
                            name="Balance"
                            onChange={this.handlechangeall} type="text" />
                        </FormGroup>
                        </Col>
                    <Col className="pl-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Date of Birth
                          </label>
                          <Input placeholder="Date of birth" defaultValue={this.state.date_of_birth}
                            name="date_of_birth"
                            onChange={this.handlechangeall} type="date" />
                        </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                      <Col className="px-1">
                      <label>Address</label>
                      <ListCountries/>
                      <br/>
                      </Col>
                    </Row>
                        <Row>
                        <Col className="px-1" md="5">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                           Old Password
                          </label>
                          <Input placeholder="*********" defaultValue={this.state.password}
                            name="password"
                            onChange={this.handlechangeall} type="password" />
                        </FormGroup>
                        </Col>
                        <Col className="px-1" md="5">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            New Password
                          </label>
                          <Input placeholder="Password" defaultValue={this.state.password_confirmation}
                            name="password"
                            onChange={this.handlechangeall} type="password" />
                        </FormGroup>
                        </Col>
                    </Row>
                   
                    <Row>
                        <Col>
                      <div className="update ml-auto mr-auto">
                        <button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick={this.editProfile}
                        >
                          Update Account
                        </button>
                      </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              </Col>
              </Row>
            </div>
        )
    }
} export default UserProfile;    
    