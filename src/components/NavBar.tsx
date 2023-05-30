interface props{
    itemCount : number,
}

const NavBar = ({itemCount}: props) =>{
    return(
        <div>{itemCount}</div>
    );
}
export default NavBar;