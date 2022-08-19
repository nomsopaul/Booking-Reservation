import "./jetlist.css";

const JetList = () => {
  return (
    <div className="plist">
      <div className="plistItem">
        <img
          src="https://media.istockphoto.com/photos/picture-of-white-matte-luxury-generic-design-private-jet-parking-picture-id537206872?k=20&m=537206872&s=612x612&w=0&h=AXXzj0x98DgnkxXp4HK0Lt7zz6HKstrdE6t_Z3OtZNQ="
          alt=""
          className="plistImg"
        />
        <div className="plistTitles">
          <h1>Jets</h1>
          <p>20 jets</p>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://media.istockphoto.com/photos/silver-two-door-sports-car-on-blacktop-picture-id168631817?k=20&m=168631817&s=612x612&w=0&h=dqrmN3lJ09svbWzl8xJ1ppmYY8GXqZKd-7QQwQNGeFc=" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>Cars</h1>
          <p>50 cars</p>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://media.istockphoto.com/photos/business-couple-entering-taxi-at-airport-picture-id1160783478?k=20&m=1160783478&s=612x612&w=0&h=BgDpu0U4Ft24R-xBQW4_DVtQ-1D_m2ELRUklOkjQEFg=" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>Taxis</h1>
          <p>100 takis</p>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://media.istockphoto.com/photos/close-up-of-black-luggage-and-surgical-mask-picture-id1344386618?k=20&m=1344386618&s=612x612&w=0&h=o-BcCBM2kh3A6vJpR3WFY8pjCzwMb0596NIph6fo8mc=" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>Hotels</h1>
          <p>30 hotels</p>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://media.istockphoto.com/photos/modern-townhouse-design-picture-id1393537665?k=20&m=1393537665&s=612x612&w=0&h=2I8RoW3owLu1PondalPEcoOzqkFDnfvfDEZbEi9a_QY=" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>Apartments</h1>
          <p>10 apartments</p>
        </div>
      </div>
    </div>
  );
};

export default JetList;
