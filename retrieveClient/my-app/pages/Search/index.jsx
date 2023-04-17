import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const card = ({ seller_name,seller_id, buyer_name,buyer_id,bill_id,purchase_date,price })=>{
  return(
    <div>
      <p>{seller_name}</p>
      <p>{seller_id}</p>
      <p>{buyer_name}</p>
      <p>{buyer_id}</p>
      <p>{bill_id}</p>
      <p>{purchase_date}</p>
      <p>{price}</p>
    </div>
  )
}


const index = () => {
  const [data,setData] = useState([""])


  return (
    <div>
      <div
        style={{
          position: "relative",
          top: "40%",
          left: "30%",

          padding: "10px",
        }}
      >
        <TextField           label="Search"
            variant="outlined"/>
        <Button style={{backgroundColor:"blue"}}>Search</Button>
      </div>
{data.map((i)=>{
  
})}
    </div>
  );
};

export default index;
