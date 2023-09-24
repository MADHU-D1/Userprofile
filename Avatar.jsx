function Avatar(props){
    const {src,name, Palce}=props
    return(
        <div className="image-container">
            <img className="image" src={src} alt="wave"/>
            <h3>{name}</h3>
            <p>{Palce}</p>
        </div>
    )
}
export default Avatar