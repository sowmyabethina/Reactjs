import React, { useEffect, useState, useRef } from 'react';

function Useref() {
    const ele = useRef(null);  // Correctly initialize useRef with null
    const [x, setx] = useState(0);

    useEffect(() => {
        // Update the input value whenever x changes
        ele.current.value = x;
    }, [x]);

    return (
        <div>
            <input type="text" ref={ele} />
            <button onClick={() => setx(x + 1)}>Click</button>
        </div>
    );
}

export default Useref;
