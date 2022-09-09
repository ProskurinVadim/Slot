import React from "react";

interface ISlot {
    label: string,
}

const Slot: React.FC<ISlot> = ({ label }) => {

    return (
        <div className="slot-item">
            <p className="slot-text">{label}</p>
        </div>
    )
}

export default Slot