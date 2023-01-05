//import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from './Navbar';
import React from "react";

class App extends React.Component {
    constructor(){
        super();
        this.state={
            products:[
                {
                    title:'Phone',
                    price:34999,
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    title:'Watch',
                    price:5999,
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    title:'Laptop',
                    price:79999,
                    qty:1,
                    img:'',
                    id:3
                },
                {
                    title:'Earphones',
                    price:1999,
                    qty:1,
                    img:'',
                    id:4
                }
            ]
        }
    }

    handleIncreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0){
            return
        }
        products[index].qty-=1;
        this.setState({
            products:products
        })
    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        })
    }
    getCartCount=()=>{
      const {products}=this.state;
      let count=0;
      products.forEach((product)=>{
        count +=product.qty;
      })
      return count;
    }
    getCartTotal=()=>{
      const {products}=this.state;
      let total=0;
      products.forEach((product)=>{
        total +=product.qty*product.price;
      })
      return total;
    }
    render(){
      const {products}=this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()}/>
          <Cart products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}/>
          <div style={{fontSize:20,padding:10}}>Total:{this.getCartTotal()} Rs</div>
        </div>
      );
    }
}

export default App;
