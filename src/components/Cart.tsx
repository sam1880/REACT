interface props{
    cartItems: string[],
}

const Cart = ({cartItems}: props) =>{
    return(
        <>
        <div>
        <ul>
            {cartItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        </div>
        </>
    );
}

export default Cart;