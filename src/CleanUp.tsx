import React, { useState, useEffect } from 'react';

export const CleanUp = () => {
    const [currentNum, setCurrentNum] = useState(0);

    const incrementNum = () => {
        console.log("Mouse event invoked!");
        setCurrentNum((preNumber)=>preNumber+1);
    };

    useEffect(() => {
        console.log("useEffect in CleanUp invoked!");
        window.addEventListener("mousedown", incrementNum);
        return ()=>{
            window.removeEventListener("mousedown", incrementNum);
        };
    },[]);

    return <div>{currentNum}</div>;
};

export default CleanUp;
