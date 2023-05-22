import ChildComponent from "./ChildComponent"
import { useState } from "react";

export default function ParentComponent() {
    const [message,setMessage]= useState("Hello from Parent default!");

    function updateMessage(newMessage) {
        setMessage(newMessage);
    }
    return (
        <div>
            <h1>Parent Cpmponent</h1>
            <ChildComponent message={message} updateMessage={updateMessage} />
        </div>
    )
}