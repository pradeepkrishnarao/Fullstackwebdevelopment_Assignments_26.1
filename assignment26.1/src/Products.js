import React, {Component} from "react";
import "./css/styles.css";
import "./css/bootstrap.min.css";

class Products extends Component{
createTasks(item){
    return <li key={item.key}><div><table className="tabl"><tr><th className="trb">{item.name}</th></tr><tr className="trp cellb"><br/>{item.description}<br/><br/></tr><tr className="trg cellb"><br />Available?{item.available ? <button className="green">Yes</button> : <button className="red">No</button>}<br/><br/></tr><tr className="trg cellb"><br/>Price: &#8377;{item.price}<br/><br/></tr></table></div><br/>
    </li>
}
render(){
var productEntries = this.props.entries;
//input product items are rendered by calling map function on product items entries and createTask function respectively. A key element is also used to keep track of each element
var listItems = productEntries.map(this.createTasks);
return(
/* Fragment is used to group a list of children without adding extra nodes to the DOM */
    <ul className="lst">
        <React.Fragment>
            {listItems}
        </React.Fragment>
    </ul>
);
}
};
export default Products;