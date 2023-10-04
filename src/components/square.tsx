import React, { useState } from "react";
import "./square.css";

export default function Square() {
    const [value, setValue] = useState(null);
    const onClick = () => setValue("X");
    return (
        <button className="square" onClick={onClick}>
        {value}
        </button>
    );
}