import React, { useState } from "react";
import SlotMashine from "./common/SlotMashine";
import PopText from "./common/PopText";

const App: React.FC = () => {
    const [result, setResult] = useState<string>("");
    return (
        <section className="page">
            <SlotMashine setResult={setResult} isEmpty={!!result.length} />
            {result && <PopText text={result} setText={setResult} />}
        </section>
    )
}

export default App;