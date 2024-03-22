const Button = (props)=>{
    const {text, color, children} = props;
    const handlerClickBtn = ()=>{
        console.log(text);
    }
    return (
        <button
            style={{color}}
            // onClick={()=>{
            //     console.log(text);
            // }}
            onClick={handlerClickBtn}
        >
            {text}
            {children}
        </button>
    );
}
Button.defaultProps ={
    color: "black"
};
export default Button;