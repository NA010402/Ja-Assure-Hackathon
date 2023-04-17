import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TransactionContext } from "../../TransactionContext";

const index = () => {
  const [btnClick, setBtnClick] = useState(false);
  const [msg, setMsg] = useState("");



  return (
    <>
      <div
        style={{
          position: "relative",
          top: "40%",
          left: "40%",
         
          padding: "10px",
        }}
      >
        <div style={{ border: "0.5px solid grey",
          borderRadius: "5px",}}>
          {" "}
          <TextField
            id="outlined-basic"
            label="Transaction ID"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Private KEy"
            variant="outlined"
          />
          <br />
          <Button
            onClick={() => setBtnClick(!btnClick)}
            style={{
              position: "relative",
              left: "25%",
              backgroundColor: "blue",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            variant="contained"
          >
            Contained
          </Button>
        </div>

        <>
          {" "}
          {btnClick && (
            <>
              <div>{msg}</div>
            </>
          )}
        </>
      </div>
    </>
  );
};

export default index;
