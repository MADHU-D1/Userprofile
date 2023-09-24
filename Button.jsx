function Button(props){
     const {text,onClick} = props
    //   const buttonText=()=>{
    //      alert(`On Click ${text} Button Text`)
    //  }
    return(
        <div>
           <button className='button' onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button