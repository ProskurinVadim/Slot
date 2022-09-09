import React, { useState, useEffect } from "react";
import Button from "../Button";
interface ISlotButtons {
    onPlay: () => void,
    onReset: () => void,
}

const SlotButtons: React.FC<ISlotButtons> = ({ onPlay, onReset }) => {

    const [disable, setDisable] = useState<boolean>(false);

    useEffect(() => {
        if (disable) {
            setTimeout(() => setDisable(false), 2600)
        }
    }, [disable]);

    const handelOnPlay: () => void = () => {
        if (!disable) {
            setDisable(true);
            onPlay();
        }
    }

    const handelReser: () => void = () => !disable && onReset();

    return (
        <div className="slot-buttons">
            <Button onClick={handelOnPlay} className="slot-button__success" disable={disable} text="Play" />
            <Button onClick={handelReser} className="slot-button__danger" disable={disable} text="Reset" />
        </div>

    )
}

export default SlotButtons