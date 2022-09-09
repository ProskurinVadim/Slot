import React, { useEffect } from "react";

interface IPopText {
    text: string,
    setText: (string:string) => void 
}

const PopText: React.FC<IPopText> = ({ text, setText }) => {

    useEffect(() => {
            setTimeout(() => setText(""), 2000);
    }, []);

    return (
        <h3 className="pop-text">{text}</h3>
    )
}

export default PopText