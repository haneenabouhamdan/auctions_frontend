import React from 'react';
import axios from 'axios';
import '../style/loginform.css';
class PaymentDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            credit_card:"",
            credit_card_error:"",
            name:"",
            paymentErr:"",
            expiration:"",
            expiration_date_error:"",
            cvv:"",
            user_id:"",
            cvvError:""
        }
    }
    validateCreditCardNumber(cardNumber) {
        cardNumber = cardNumber.split(' ').join("");
        if (parseInt(cardNumber) <= 0 || (!/\d{15,16}(~\W[a-zA-Z])*$/.test(cardNumber)) || cardNumber.length > 16) {
            // console.log(cardNumber);
            return false;
        }
        var carray = new Array();
        for (var i = 0; i < cardNumber.length; i++) {
            carray[carray.length] = cardNumber.charCodeAt(i) - 48;
        }
        carray.reverse();
        var sum = 0;
        for (var i = 0; i < carray.length; i++) {
            var tmp = carray[i];
            if ((i % 2) != 0) {
                tmp *= 2;
                if (tmp > 9) {
                    tmp -= 9;
                }
            }
            sum += tmp;
        }
        return ((sum % 10) == 0);
    }
    handleChange = ({ target }) => {
        this.setState({ ...this.state, [target.name]: target.value });
      };
    onSubmit = e =>{
        e.preventDefault();
        var error = [];
        if(this.state.credit_card === ''){
         this.setState({
             credit_card_error: 'Please enter your credit card number.',
         });
         error.push("credit error");
               
         }else{
             this.setState({
                credit_card_error: '',
             });
         }
         if(!this.validateCreditCardNumber(this.state.credit_card)){
            this.setState({
                credit_card_error: 'Invalid credit card number.',
            });
            error.push("credit error");
                  
            }else{
                this.setState({
                   credit_card_error: '',
                });
            }
         if(this.state.name === ''){
            this.setState({
                paymentErr: 'Please enter the name of credit card.',
            });
            error.push("payment");
                  
            }else{
                this.setState({
                   paymentErr: '',
                });
            }
            if(this.state.expiration=== ''){
                this.setState({
                    expiration_date_error: 'Please enter expiration date .',
                });
                error.push("expiration_date");
                      
                }else{
                    this.setState({
                        expiration_date_error: '',
                    });
                }
            if(this.state.cvv=== ''){
                 this.setState({
                    cvvError: 'Invalid cvv!!.',
                    });
                error.push("cvv error");
                 }else{
                this.setState({
                cvvError: '',
                });
            }
        
            axios.defaults.withCredentials=true;
            axios.get("/sanctum/csrf-cookie").then(response => {
              axios.post("/api/addPayment",this.state).then(res => {
                  this.props.history.push('/WelcomePage')
                console.log(res.config['data']);
              });
            });    
    }
    render(){
        return( 
        <div className="credit">
        <form action="#">
        <h2 style={{color:"#595959"}}>Please enter your Credit details</h2>
        <input type="text" onChange={this.handleChange} value={this.state.credit_card} name="credit_card" placeholder="Credit Card number"></input>
        <label className="message">{ this.state.credit_card_error }</label>
        <input type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" />
        <label className="message">{ this.state.paymentErr}</label>
        <input type="date" onChange={this.handleChange} value={this.state.expiration} name="expiration" placeholder="Expiration date" />
        <label className="message">{ this.state.expiration_date_error}</label>
        <input type="number" onChange={this.handleChange} value={this.state.cvv} name="cvv" placeholder="cvv" />
        <label className="message">{ this.state.cvvError}</label>
        <br />
        <button onClick={this.onSubmit}>Submit</button>
        <br/>
        </form>
        </div>
        )
    }
}
export default PaymentDetails;