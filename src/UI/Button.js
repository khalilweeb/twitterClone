import clss from './button.module.css';
const Button = props => {


    return (
        <button className={`${clss.button} ${props.className}`} onClick={props.onClick}>{props.children}</button>
    );


}

export default Button;