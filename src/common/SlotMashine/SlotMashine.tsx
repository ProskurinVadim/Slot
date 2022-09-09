import React, { useState, useRef, useLayoutEffect, RefObject } from "react";
import Slot from "../Slot/Slot";
import SlotButtons from "../SlotButtons";
import Scoreboard from "../Scoreboard";
import { generateArray, check } from "../../utils/functions";
import { defaultItems } from "../../utils/consts";

interface ISlotMashine {
    setResult: (result: string) => void,
    isEmpty: boolean,
}

const SlotMashine: React.FC<ISlotMashine> = ({ setResult, isEmpty }) => {

    const [slots, setSlots] = useState<string[][]>(defaultItems);
    const [score, setScore] = useState<number>(1000);
    const slotRef = useRef<HTMLHeadingElement>(null);

    const onPlay = (): void => {
        isEmpty && setResult("");
        const newSlots: string[][] = [];
        for (let i = 0; i < 3; i++) {
            newSlots.push(generateArray(slots[i]));
        }
        setSlots(newSlots)
    }

    const tick = async (ref: any) => {
        const slotCollection: NodeListOf<Element> = ref.current.getElementsByClassName("slot-column");
        setScore(score - 50);
        for (let slot of slotCollection as any) {
            slot.classList.add("slot-anim");
            await new Promise((resolve) => setTimeout((resolve), 100))
        };

        setTimeout(() => {
            for (let slot of slotCollection as any) {
                slot.classList.remove("slot-anim");
            }
            const resultSlots : string[][] = slots.map(elem => [...elem].splice(elem.length - 3, elem.length));
            setSlots(resultSlots);
            const result: string = check(resultSlots)
            if (result) {
                setResult(result);
                setScore(score + 250);

            }
        },2000)
        
    }

    const onReset = (): void => {
        setSlots(defaultItems);
        setScore(1000);
    }

    useLayoutEffect(() => {
        if (slots[0].length > 3) tick(slotRef);
    }, [slotRef, slots])

    return (
        <div className="slot">
            <div className="slot-list" ref={slotRef}> {
                slots.map((list,i) =>
                    <div className="slot-column" key={"slot-column-"+i}>
                        {
                            list.map((elem, i) => <Slot key={"slot-text-" + i} label={elem} />)
                        }
                    </div>
                )
            } </div>
            <Scoreboard score={score} />
            <SlotButtons onPlay={onPlay} onReset={onReset} />
        </div>
    )
}

export default SlotMashine