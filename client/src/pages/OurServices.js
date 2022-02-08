import "./homepage.css";

import CardList from "../components/CardList";

import Navbar from "./Navbar";

const OurServices = () => {
  return (
    <>
      <Navbar />
      <div className="mainCard">
        <div>
          <CardList />
        </div>
      </div>
    </>
  );
};
export default OurServices;
