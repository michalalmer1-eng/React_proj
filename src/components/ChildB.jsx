import React from "react";

function ChildB({ value, setValue }) {
    return (
        <div className="child">
            <h2>Child B(Uncle)</h2>
            <button onClick={() => setValue(value + 1)}>Increase</button>
        </div>
    );
}

export default ChildB;
