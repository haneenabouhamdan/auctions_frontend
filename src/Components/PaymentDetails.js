import React from 'react';
import '../style/loginform.css';
class PaymentDetails extends React.Component{
    render(){
        return(
            <div>
        <form action="#">
        <h2 style={{color:"#595959"}}>Credit details</h2>
        <input type="text" placeholder="Credit Card number"></input>
        <input type="text" placeholder="Name" />
        <input type="date" placeholder="Expiration date" />
        <input type="number" placeholder="cvv" />
        <br />
        <button>Submit</button>
        </form>
        </div>
        )
    }
}
export default PaymentDetails;