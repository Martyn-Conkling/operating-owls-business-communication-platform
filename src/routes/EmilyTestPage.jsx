import React from "react";
import Message from "../components/main-components/MessageComponent/Message";

export default function EmilyTestPage() {
    return(
        <div>
        <Message 
            firstName="FirstName"
            lastName="LastName"
            messageContent="In amet, eget tincidunt dui sollicitudin. eget odio vitae turpis eget Nam tincidunt
             cursus commodo non dui cursus elit in. In amet, eget tincidunt dui sollicitudin. eget odio vitae
              turpis eget Nam tincidunt cursus commodo non dui cursus elit in"
            date="Date"
            time="Time"
        />
        <Message
            firstName="FirstName"
            lastName="LastName"
            messageContent="In amet, eget tincidunt dui sollicitudin. eget odio vitae turpis eget Nam tincidunt
             cursus commodo non dui cursus elit in"
            date="Date"
            time="Time"
        />
        </div>
    )
}