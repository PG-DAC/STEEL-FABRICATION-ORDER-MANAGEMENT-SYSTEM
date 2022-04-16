import { History } from "history"
import { useHistory } from 'react-router-dom';
const ManagerHome = ()=> {
    let history=useHistory()
    return (
        <>
        <div style={{ display: "flex", flexDirection: "row"}}>
            <div >
            <button onClick={()=>
            {
                history.push("view-products")
            }}
            className="btn btn-success">
                    View Products
            </button>
            </div>
           

            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("view-customers")
            }}
            className="btn btn-success">
             View Customers     
            </button>
            </div>

           
            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("add-category")
            }}
            className="btn btn-success">
                    Add Category
            </button>
            </div>

            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("add-product")
            }}
            className="btn btn-success">
                    Add Product
            </button>
            </div>

            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("view-orders-manager")
            }}
            className="btn btn-success">
             View Orders     
            </button>
            </div>

            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("view-reviews")
            }}
            className="btn btn-success">
             View Reviews     
            </button>
            </div>

            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("view-customised")
            }}
            className="btn btn-success">
             View Customised Product Requests     
            </button>
            </div>

           
        </div>
        <div style={{marginLeft:100,marginTop:40,align:'center'}}>
            <img src="https://cdn.pixabay.com/photo/2016/12/12/09/55/businesswoman-1901130__340.png" style={{height:400,width:900}} alt="....." />
        </div>
        </>
    )
}

export default ManagerHome