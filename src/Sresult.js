import React from "react";

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/200x200/?${props.name}`;
    console.log(props.name);
    return(
        <>
        <div>
            <img src={img} alt="search" />
        </div>
        </> 
    )
    
}
export default Sresult;