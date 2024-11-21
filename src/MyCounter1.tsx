import React,{useState} from "react";

const counter8 : React.FC = () => {
 
    const[S,setS] = useState(0);

    const increment = () => {

    setS(S+1);

    }

    return(

    <div>
        <h1>Add Number Through Counter</h1>
        <div>
            <button onClick={increment}>{S}</button>
        </div>
    </div>

    )

}

export default counter8;







