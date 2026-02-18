import NavBar from "../../Components/NavBar/NavBar";
import pageNotFound from "../../assets/images/pageNotFound.png";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="max-w-7xl mx-auto my-8">
        <img className="rounded-4xl" src={pageNotFound} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
