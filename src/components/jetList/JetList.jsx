import useFetch from "../../hooks/useFetch";
import "./jetlist.css";

const JetList = () => {

  const {data, loading, error} = useFetch (
  '/flights/countByType'
);

const images = [
    "https://media.istockphoto.com/photos/picture-of-white-matte-luxury-generic-design-private-jet-parking-picture-id537206872?k=20&m=537206872&s=612x612&w=0&h=AXXzj0x98DgnkxXp4HK0Lt7zz6HKstrdE6t_Z3OtZNQ=",
    'https://media.istockphoto.com/photos/silver-two-door-sports-car-on-blacktop-picture-id168631817?k=20&m=168631817&s=612x612&w=0&h=dqrmN3lJ09svbWzl8xJ1ppmYY8GXqZKd-7QQwQNGeFc=',
    'https://media.istockphoto.com/photos/business-couple-entering-taxi-at-airport-picture-id1160783478?k=20&m=1160783478&s=612x612&w=0&h=BgDpu0U4Ft24R-xBQW4_DVtQ-1D_m2ELRUklOkjQEFg=',
    'https://media.istockphoto.com/photos/close-up-of-black-luggage-and-surgical-mask-picture-id1344386618?k=20&m=1344386618&s=612x612&w=0&h=o-BcCBM2kh3A6vJpR3WFY8pjCzwMb0596NIph6fo8mc=',
    'https://media.istockphoto.com/photos/modern-townhouse-design-picture-id1393537665?k=20&m=1393537665&s=612x612&w=0&h=2I8RoW3owLu1PondalPEcoOzqkFDnfvfDEZbEi9a_QY='
];

  return (
    <div className="plist">
      {loading ? (
        "loading" 
        ) : (
          <>
            {data && 
            images.map((img,i)=> (

            <div className="plistItem" key={i}>
        <img
          src={img}
          alt=""
          className="plistImg"
        />
        <div className="plistTitles">
          <h1>{data[i]?.type}</h1>
          <p>{data[i]?.count} {data[i]?.type}</p>
        </div>
      </div>
        ))}
      </>
      )}
    </div>
  );
};

export default JetList;
