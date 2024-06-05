import React, { useEffect, useState } from 'react';
import './ProgressCycle.css';

const ProgressCycle = ({percntage = 50}) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < percntage) {
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 30);
            return () => clearInterval(interval);
        }
    }, [counter, percntage]);

    return (
        <div className="skill">
            <div className="outer">
                <div className="inner">
                    <div id="number">
                        {counter}%
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
        </div>
    );
};

export default ProgressCycle;
