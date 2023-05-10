export default function Comment() {
    return (
        <AddCom usern= "Conner" time={(new Date()).toString()}>
            <h1>Hello World!</h1>
            <h2>This is a comment!</h2>
        </AddCom>
    )
}

function AddCom({usern, time, children}) {
    return (
        <section>
            <p>{usern} commented at {time}</p>
            {children}
        </section>
    )
}