import "./searchitem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img
        src="https://media.istockphoto.com/photos/private-jet-picture-id637359998?k=20&m=637359998&s=612x612&w=0&h=6REDfQOOCu_Q1bBqP7HMxB3eOm5OJDcHaqB3e-9_Ipc="
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">Private Jets Emirates</h1>
            <span className="siDistance">500m from Location</span>
            <span className="siTaxiOp">Free Hostess Service</span>
            <span className="siSubtitle">
                Private Jet with Top Services
            </span>
            <span className="siFeatures">
                Entire studio * 1 bathroom * 21m 1 full bed
            </span>
            <span className="siCancelOp">Free Cancellation </span>
            <span className="siCancelOpSubtitle">
                You can canel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxiOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
    </div>
    </div>
  )
}

export default SearchItem