import "./propertiType.css";

const PropertiType = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o"
          alt=""
          className="fpImage"
        />
        <span className="propertyName">Aparthotel Stare Miasto</span>
        <span className="propertyCity">Krakow</span>
        <span className="propertyPrice">Starting from BDT 7,356</span>
        <div className="rating">
          <button>8.9</button>
          <span className="ratingValue">Excellent .</span>
          <span>2,691 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o"
          alt=""
          className="fpImage"
        />
        <span className="propertyName">The Patio Barcelona</span>
        <span className="propertyCity">Barcelona</span>
        <span className="propertyPrice">Starting from BDT 38,855</span>
        <div className="rating">
          <button>7.9</button>
          <span className="ratingValue">Excellent .</span>
          <span>4,691 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/32087571.jpg?k=3724cb7f37e0e34e60b01cea07c4659a897885c9819728c67b1cec5544dd2b24&o"
          alt=""
          className="fpImage"
        />
        <span className="propertyName">Luxury Apartments Klara</span>
        <span className="propertyCity">Split</span>
        <span className="propertyPrice">Starting from BDT 9,940</span>
        <div className="rating">
          <button>8.4</button>
          <span className="ratingValue">Excellent .</span>
          <span>3,691 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max500/97644401.jpg?k=809528f82d4b64141dc312b8a304fe971b16dfb0e2721e4941391c5acaaa8378&o"
          alt=""
          className="fpImage"
        />
        <span className="propertyName">Romance al Colosseo</span>
        <span className="propertyCity">Rome</span>
        <span className="propertyPrice">Starting from BDT 23,042</span>
        <div className="rating">
          <button>8.9</button>
          <span className="ratingValue">Excellent .</span>
          <span>2,691 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default PropertiType;
