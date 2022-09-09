import React, { useState, useLayoutEffect,useEffect, useRef, RefObject } from "react";

interface Iprop {
    minTime: number,
    children: JSX.Element,
    loading: boolean,
}

interface IState {
    _loading: boolean,
}

interface ITick {
    (ref: any): void;
};

const text = ["L", "O", "A", "D", "I", "N", "G"] as const;


const Loader: React.FC<Iprop> = ({ minTime, children, loading }) => {
    const [_loading, set_Loading] = useState<boolean>(true);
    const loaderRef = useRef<HTMLHeadingElement>(null);


    const tick: ITick =  (ref: any) => {
        const textColection = ref.current.getElementsByClassName("loader-block");
        setInterval(async () => {
            for (let slot of textColection) {
                const prevBox = slot.getElementsByClassName("loader-text")[0];
                const box = document.createElement('p');
                box.classList.add('loader-text');
                box.textContent = text[Math.floor(Math.random() * (7 - 0))];
                slot.appendChild(box)
                prevBox.style.transitionDuration = "500ms";
                prevBox.style.transform = `translateY(-${box.clientHeight}px)`;
                box.style.transitionDuration = "500ms";
                box.style.transform = `translateY(-${box.clientHeight}px)`;
                setTimeout(() => {
                    box.style.transitionDuration = "0s";
                    box.style.transform = `translateY(0px)`;
                    slot.removeChild(prevBox)
                }, 550)

                await new Promise((resolve) => setTimeout(resolve, 100));
            }
        },600)            
    }

        

    

    useLayoutEffect(() => {
        if (_loading || loading) {
            loaderRef && tick(loaderRef);
        }
    }, [loaderRef, _loading]);

    return (
        <>
            {loading || _loading ?
                <div className="loader" ref={loaderRef}>
                    {
                        text.map((elem,i) => <div className="loader-block">
                            <p className="loader-text" key={i}>{elem}</p>
                        </div>)
                    }
                </div>
                : children
            }
        </>
    )
}

export default Loader