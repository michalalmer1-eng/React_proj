import { useState } from "react";
import ChildA from "./ChildA.jsx";
import ChildB from "./ChildB.jsx";

function Grandfather() {
    const [val, setVal] = useState(0);
    return (
        <div className="grandfather">
            <h1>Grandfather</h1>
            <div className="children">
                <ChildA value={val} />
                <ChildB value={val} setValue={setVal} />
            </div>
        </div>
    );
}

export default Grandfather;