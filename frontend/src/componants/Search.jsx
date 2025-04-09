import React, { useEffect, useState } from "react";
import DoctorList from "./DoctorList";
import axios from "axios";
import "./search.css";

const Search = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get("http://127.0.0.1:5000/doctor/list")
          .then((response) => {
            console.log(response.data.doctorsList);
            setDoctors(response.data.doctorsList);
            setFilteredDoctors(response.data.doctorsList);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchData();
    },[]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase()) ||
        doctor.email.toLowerCase().includes(query.toLowerCase()) || 
        doctor.speciality.toLowerCase().includes(query.toLowerCase()) ||
        doctor.venue.toLowerCase().includes(query.toLowerCase())
        // doctor.location.toLowerCase().includes(query.toLowerCase()) ||
    );
    setFilteredDoctors(filtered);
  };


  return (
    <div className="search-container">
      <h1 className="search-header">Doctor Directory</h1>
      <div className="search-input-container">
        <input
            className="search-input"
            type="text"
            placeholder="Search by name, location, or specialty"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {searchQuery && (
          <div className="search-results">
              {filteredDoctors.length > 0 ? (
                  <p>Found <span className="highlight">{filteredDoctors.length}</span> doctors matching "<span className="highlight">{searchQuery}</span>"</p>
              ) : (
                  <p className="no-results">No doctors found matching "{searchQuery}"</p>
              )}
          </div>
      )}
      <DoctorList doctors={filteredDoctors} />
    </div>
  );
};

export default Search;
