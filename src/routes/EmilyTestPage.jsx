import React from "react";
import MessageComponent from "../components/main-components/Message";

export default function EmilyTestPage() {

    return(
        <div>
        <MessageComponent
            displayName="FirstName LastName"
            messageContent="In amet, eget tincidunt dui sollicitudin. eget odio vitae turpis eget Nam tincidunt
         cursus commodo non dui cursus elit in. In amet, eget tincidunt dui sollicitudin. eget odio vitae
          turpis eget Nam tincidunt cursus commodo non dui cursus elit in"
            time="12:00AM"
            displayUserInfo={true} 
        />
        <MessageComponent
            displayName="FirstName LastName"
            messageContent="In amet, eget tincidunt dui sollicitudin. eget odio vitae turpis eget Nam tincidunt
             cursus commodo non dui cursus elit in. In amet, eget tincidunt dui sollicitudin. eget odio vitae
              turpis eget Nam tincidunt cursus commodo non dui cursus elit in"
            time="12:00AM"
            displayUserInfo={true}
        />
        <MessageComponent
            displayName="FirstName LastName"
            messageContent="In amet, eget tincidunt dui sollicitudin. eget odio vitae turpis eget Nam tincidunt
             cursus commodo non dui cursus elit in"
            time="12:00AM"
            displayUserInfo={true}
        />
        </div>
    )
}