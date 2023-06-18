const function Form01(
    // status could be 'typing','submitting','success', 'error'
    {status= 'empty'}
    ) {
    if (status === 'success')
        return (
            <p>That's right!</p>
        )
    return
}