const element = (
    <div className="title" style={{"color":"red"}}>
        <span>Hello world</span>
    </div>
);
console.log(JSON.stringify(element,null,2));
function DOM() {
    return element;
}


export default DOM;