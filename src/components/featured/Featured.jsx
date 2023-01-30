import useFetch from '../../hooks/useFetch.js';
import './featured.css';

const Featured = () => {
  const {data, loading, error} = useFetch (
    '/flights/countByCity?cities=London,Lagos,Ethopia'
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
      <>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[0]} Flights</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>{data[1]} Flights</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ethopia</h1>
          <h2>{data[2]} Flights</h2>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Featured;
