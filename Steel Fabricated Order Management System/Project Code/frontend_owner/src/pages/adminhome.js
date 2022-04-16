import { useHistory } from "react-router"
const AdminHome = ()=> {

    let history=useHistory()
    return (
        <>
        <div>
        <h1>Admin Dashboard</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row"}}>
               
               <div>
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
                history.push("view-staff")
            }}
            className="btn btn-success">
             View Staff     
            </button>
            </div>

            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("add-staff")
            }}
            className="btn btn-success">
             Add Staff    
            </button>
            </div>
        
        </div>
        <div style={{marginLeft:100,marginTop:60,align:'center'}}>
            <img src="https://cdn.pixabay.com/photo/2021/09/02/10/00/businessman-6593090__340.png" style={{height:300,width:600}} alt="....." />
        </div>
        </>
    )
}

export default AdminHome