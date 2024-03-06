import React from "react";
import Message from "../components/main-components/Message";

export default function EmilyTestPage() {
    return(
        <div>
        <Message 
            displayName="FirstName LastName"
            messageContent="In amet, eget tincidunt dui sollicitudin. eget odio vitae turpis eget Nam tincidunt
             cursus commodo non dui cursus elit in. In amet, eget tincidunt dui sollicitudin. eget odio vitae
              turpis eget Nam tincidunt cursus commodo non dui cursus elit in"
            time="Time"
            avatar=""
        />
        <Message
            displayName="FirstName LastName"
            messageContent="In amet, eget tincidunt dui sollicitudin. eget odio vitae turpis eget Nam tincidunt
             cursus commodo non dui cursus elit in"
            time="Time"
        />
        </div>
    )
}