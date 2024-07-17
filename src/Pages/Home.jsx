import { Link } from "react-router-dom";
import bkash from "../assets/bkash.avif";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${bkash})` }}
    >
      <Link to='/dashboard/bkashUi'>
        <div className="flex gap-4 justify-center text-white items-center">
          <p className="mt-1">
            <FaArrowRight></FaArrowRight>
          </p>
          <h3 className="text-2xl font-bold ">Dashboard</h3>
        </div>
      </Link>
    </div>
  );
};

export default Home;
