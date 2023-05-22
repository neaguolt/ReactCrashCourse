export default function ChildComponent(props) {

    function handleChange(e) {
        props.updateMessage(e.target.value);
    };
    return (
        <div>
            <h2>Child Component</h2>
            <p>Message from parent: {props.message}</p>
            <input type="text" value={props.message} onChange={handleChange} />
        </div>
    )
}