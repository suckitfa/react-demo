import "./welcome.css"
function FancyBorder(props) {
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return(
        <FancyBorder colro="blue" >
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our speceraft!
            </p>
        </FancyBorder>
    )
}

export default WelcomeDialog;