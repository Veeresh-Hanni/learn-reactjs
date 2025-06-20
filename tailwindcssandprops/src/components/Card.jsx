
function Card(props){

    console.log(props.username);
    
    return(
    <>
        <div>Card</div>
        <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
            <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/32421887/pexels-photo-32421887/free-photo-of-warm-chai-latte-in-disposable-cup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
        <div className="flex">
            <span className="text-2xl font-medium">{props.username}</span>
            <span className="font-me>The Anti-Patterns"></span>
            <button className="p-2 m-10 rounded-2xl bg-yellow-100 h-29 w-28 hover:bg-yellow-400 mix-blend-difference font-serif">{props.btnText || "Know Me"}</button>
        </div>
        </div>
    </>
    )
}

export default Card;