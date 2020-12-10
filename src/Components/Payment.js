
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PaymentDetails from '../Components/PaymentDetails';

class Payment extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false,
      setOpen: false,
    }
  }  

  componentDidMount() {
  }
  
    handleClose = () => {
      this.setState({
        setOpen: false
      })
      this.props.closeDP();
    };

   
    
 render(){ 
    return (
        <Dialog open={this.props.openDP} onClose={this.handleClose}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" ></DialogTitle>
        <DialogContent style={{width:400,height:400}}>
        <PaymentDetails />
        </DialogContent>
        <DialogActions style={{position:"fixed"}}>
          <Button onClick={this.handleClose} color="black">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    
    );
  }
}

export default Payment;