import { useState } from "react";
import { useLoaderData } from "react-router";
import AllDoctors from "../../Components/AllDoctors/AllDoctors";
import AnimatedCounters from "../../Components/AnimatedCounters/AnimatedCounters";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  const allDoctorsData = useLoaderData();
  const doctors = allDoctorsData.doctors;
  const [searchText, setSearchText] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = () => {
    const trimmed = searchText.trim();
    if (trimmed === "") {
      return;
    }
    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchText.toLowerCase()) ||
        doctor.specialities.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div className="flex flex-col items-center">
      <Banner
        setFilteredDoctors={setFilteredDoctors}
        allDoctorsData={allDoctorsData}
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      ></Banner>
      <AllDoctors
        allDoctorsData={{ ...allDoctorsData, doctors: filteredDoctors }}
      ></AllDoctors>
      <AnimatedCounters doctors={doctors}></AnimatedCounters>
    </div>
  );
};

export default Home;
