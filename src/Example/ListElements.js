export default function ListElements(props){
    const numbers = props.numbers;
    const itemList= numbers.map((number)=> 
        <li key={number.toString()}>{number}</li>);
    return (
        <ul>{itemList}</ul>
    );
}