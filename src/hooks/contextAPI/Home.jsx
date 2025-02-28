import { use } from "react";
import { BioContext } from ".";

//import { useBioContext } from ".";

const Home = () => {
  //const { myname, myage } = useBioContext();
  const { myname, myage } = use(BioContext);
  return (
    <>
      <h3 className="text text-center text-info">
        Welcome to Home Page. <br />
        My name is {myname} and my age is {myage}
      </h3>
    </>
  );
};

export default Home;
