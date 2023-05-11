export default function DivScrollable(props) {
    const { numElements, text } = props;
    const elements = Array.from({ length: numElements }, (_, index) => (
        <p key={index}>{text}</p>
    ));

  return (
    <div>
      {elements}
    </div>
  );
}