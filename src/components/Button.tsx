interface props{
    children : string;
    color?: string;
    onClick: () => void;
}

function Button({children, color = "primary", onClick}: props){
   return(
    <>
        <button type="button" className={"btn btn-"+color} onClick = {onClick}>{children}</button>
    </>
   );
}

export default Button;