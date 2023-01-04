import React from "react";

class CartItem extends React.Component{
    
    render(){
        const {title,price,qty}=this.props.product;
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
                        <img alt="increase" onClick={()=>this.props.onIncreaseQuantity(this.props.product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img alt="decrease" onClick={()=>this.props.onDecreaseQuantity(this.props.product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" onClick={()=>this.props.onDeleteProduct(this.props.product.id)}className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484662.png" />
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