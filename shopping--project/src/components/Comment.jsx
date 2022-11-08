import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import ClockComp from "../Clock/ClockComp";
import DataContext from "../context/DataContext";



const Comment = (props) => {
    const {state} = useContext(DataContext)
    const {comment} = props
    return (  
        <ListGroup.Item style={{backgroundColor:"#141414", color:"white"}}>
            <div style={{backgroundImage:`url(${state.user.profile})`,backgroundSize:'cover', 
                border:"1px solid white", width:"30px", height:"30px",
                borderRadius:"10%", backgroundRepeat:"no-repeat", display:"inline-block"}}>
                </div>
            <h4 style={{}}>{comment.name}</h4>
            <p style={{float:"left", fontSize:"10px"}}><ClockComp/></p>
            <p className="Comment-Color" style={{color:"white",fontWeight:"bold", marginTop:"-4px"}}>
                : {comment.text}
            </p>

        </ListGroup.Item>
    );
}

export default Comment;