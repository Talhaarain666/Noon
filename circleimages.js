function Circleimgs(props) {
    return (
        <>
            <img className="circle-Imgs mousePoint" src={props.imgUrl}></img>
        </>

    )

}

function Fourimgs(props) {
    return (
        <>
            <img className="mousePoint" src={props.fourimgUrl}></img>


        </>
    )
}

export { Circleimgs, Fourimgs };