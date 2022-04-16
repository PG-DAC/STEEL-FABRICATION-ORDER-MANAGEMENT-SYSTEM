import { useHistory } from 'react-router-dom'

const EmployeeHome = (props)=>{
    let history=useHistory()
    
    return (
        <div>
             <div>
            
            <button onClick={()=>
            {
                history.push("view-orders")
            }}
            className="btn btn-success">
             View Orders    
            </button>
            </div>
        </div>
    )
}

export default EmployeeHome