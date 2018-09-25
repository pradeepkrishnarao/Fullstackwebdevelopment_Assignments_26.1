import React, {Component} from "react";
import Products from "./Products";
import "./css/styles.css";
import "./css/bootstrap.min.css";

class ProductList extends Component{
/* ProductList component is first initialized. The constructor(props) method is only called once */
    constructor(props){
    super(props);
    this.state = {
    items: []
};
    this.addItem = this.addItem.bind(this);
}
addItem(e){
    if(this.productName.value !== "" && this.Description.value !=="" && this.Price.value !==""){
//Stores newItem object that includes unique key and entered text as well
var newItem = {
    name: this.productName.value,
    description: this.Description.value,
    price: this.Price.value, 
    available: this.Available.checked,
    key: Date.now()
    };
/* Set the state's of items property that has both the existing items data along with the newly entered data. Note unshift method results in UI error if both mutable and immutable passed into an array. concat method serves the purpose appropriately.*/
    this.setState((prevState) => {
    return{
    items: prevState.items.concat(newItem)
};
})
    this.productName.value = "";
    this.Description.value = "";
    this.Price.value = "";
    this.Available.checked = false;
}
    console.log(this.state.items);
/* By default, when the form is submitted, the page reloads and clears everything out. By calling, preventDefault, this event's default behaviour is overridden.*/
    e.preventDefault();
}
render(){
//onSubmit attribute in the form calls the event handler addItem(e) 
//The input, text and checkbox has stored references to their property anywhere inside this component that can be accessed
//<Products entries={this.state.items}/> translates into markup to get rendered
return(
    <div>
    <div>
        <h2>My Product Store</h2>
        <hr className="hrclr" />
        <h4>Products</h4>
    <form className="bgc form-group" onSubmit={this.addItem}>
        <label>Name</label>
        <input name="productName" className="form-control" type = "input" ref={(prodName)=> this.productName = prodName} placeholder="Please enter product name" size="50" />
        <label>Description</label>
        <textarea name="Description" type = "text" className="form-control" ref={(descr)=> this.Description = descr} width="100" height="20"/>
        <label>Price</label>
        <input name="Price" className="form-control" type = "input" ref = {(pric)=>this.Price=pric} placeholder="Please enter price" size= "50"/><br/>
        <input name="Available" type = "checkbox" ref = {(checked)=>this.Available=checked}  onChange={this.addItem}/><label>Available</label><br />
        <button className="btn btn-primary" type="submit">Save</button>
    </form>
    </div>
        <Products entries={this.state.items}/>
    </div>
);
}
}
export default ProductList;