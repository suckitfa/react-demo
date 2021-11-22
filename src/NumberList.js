function NumberList(props) {
    const numbers = props.numbers.slice();
    const listItems = numbers.map(n=>(
        <ListItem key={n.toString()} number={n}/>
    ))
    return(
        <ul>
            {listItems}
        </ul>
    );
}

function ListItem(props) {
    const number = props.number;
    return(
        <li>{number}</li>
    );
}
export default NumberList;