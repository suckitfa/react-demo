
function Form(props) {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You submit the form!');
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form;