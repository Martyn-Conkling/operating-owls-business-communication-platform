import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from  "@mui/icons-material/AccountCircle";

export default function Message(props) {


    return (
        <Container>
        <TextField 
            id="filled-basic" 
            label="Write your message here:" 
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),
            }}
            variant="filled" 
        />
        </Container>
    );
}