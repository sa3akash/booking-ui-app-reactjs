import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItemContainer'>
        <div className="searchImg">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/340020261.webp?k=cbea74d549684c9fe22ff583c108dffe75d33a1ffc8dc42ecf28066f39ceb47b&o=&s=1" alt="" />
        </div>
        <div className="searchDesc">
            <h1 className="searchTitle">Hotel Sea World Cox's Bazar</h1>
            <span className="searchDistance">1.6 km from centerBeach Nearby</span>
            <span className="searchDistanceBeach">250 m from beach</span>
            <span className="searchTax">Travel Sustainable property</span>
            <div className="SearchFeauture">
                <span className="searchF1">Deluxe Room</span>
                <span className="searchF2">1 king bed</span>
                <span className="searchF3">Breakfast included</span>
                <span className="searchF4">Only 1 room left at this price on our site</span>
            </div>
        </div>
        <div className="searchDetail">
            <div className="searchDetailTop">
                <div className="searchScore">
                    <span className='reviesScore'>Review score</span>
                    <span className="viewsScore">7 reviews</span>
                </div>
                <button className="searchScoreButton">4.9</button>
            </div>
            <div className="searchDetailBottom">
                <span>9 nights, 2 adults</span>
                <h3>BDT 31,232</h3>
                <span>+BDT 5,153 taxes and charges</span>
                <button>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem