export default function Button() {
    return (
        <div><button onDoubleClick={handledblclick} onMouseOver={onhover} onClick={dosomething}>click me!</button></div>
    )
}
function dosomething(event) {
    console.log(event);
    console.log("hello");
}
function onhover() {
    console.log("hover");
}
function handledblclick() {
    console.log("dblclick");
}