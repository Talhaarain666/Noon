import { fontSize } from "@mui/system";

function Cardsall(props) {
    return (
        <>

            <div className="allCardsMainDiv mousePoint"><img className="" width={"100%"} src={props.cardImagesUrl}></img>
                <p className="greyColor">{props.cardTitle}</p>
                <p className="pzerom price"><span className="greyColor">AED </span>{props.productPrice}</p>
                <div className="dis-flex">
                    <p className="fs-12 greyColor"><s className="greyColor">AED {props.prePrice} </s></p>
                    <p className="fs-12 offDiscount">{Math.round((props.prePrice - props.productPrice) / props.prePrice * 100) + "% OFF"}</p>
                </div>
                <p className="pzerom greyColor">Arrives</p>
                <p className="pzerom"><b>Tomorrow, May 16</b></p>
            <p className="fs-12 expressBadge">express</p>
            
            </div>

        </>
    )
}

export default Cardsall;