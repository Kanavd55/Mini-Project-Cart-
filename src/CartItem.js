import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title:'Phone',
            price:999,
            qty:1,
            img:''
        }
    }
    increaseQuantity=()=>{
        //console.log('this',this.state);
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        } )
    }
    decreaseQuantity=()=>{
        //console.log('this',this.state);
        this.setState((prevState)=>{
            if(prevState.qty===1){
                return
            }
            return{
                qty:prevState.qty-1
            }
        } )
    }
    render(){
        const {title,price,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" onClick={this.increaseQuantity} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img alt="decrease" onClick={this.decreaseQuantity} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484662.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles={
    image:{
        background:'#ccc',
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;