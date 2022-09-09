import React from "react";

interface IScoreboard {
    score: number
}

const Scoreboard: React.FC<IScoreboard> = ({ score }) => {

    return (
        <div className="score-board">
            <span className="bolder">Score : </span> {score < 0 ? 0 : score}
        </div>
    )
}

export default Scoreboard