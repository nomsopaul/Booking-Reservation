import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Private Jets</h1>
          <h2>First class Service</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Executive Apartments</h1>
          <h2>Best Available</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Exotic Rides</h1>
          <h2>Best Rates</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
