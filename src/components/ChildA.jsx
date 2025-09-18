import Grandson from "./Grandson.jsx";
function childA({value}) {
    return (
        <div className="child">
            <h2>Child A</h2>
            <Grandson val={value}/>
        </div>
    );
}

export default childA;
