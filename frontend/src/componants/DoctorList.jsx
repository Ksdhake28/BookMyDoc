import React from "react";
import { useNavigate } from "react-router-dom";
const DoctorList = (props) => {

    let doctors = props.doctors
    
    const navigate = useNavigate();

    const handleOnClick = (doctor) => {

        localStorage.setItem('unity-doctor-id-click',doctor._id);
        navigate('/slotSelection');
    }

    return (
        <div className="doctor-list-container">
            {doctors.map((doctor) => (
                <div key={doctor._id} className="doctor-item">
                    <div className="doctor-details">
                        <div className="detail-row">
                            <span className="detail-label">Name:</span>
                            <span className="doctor-name">{doctor.name}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Speciality:</span>
                            <span className="doctor-speciality">{doctor.speciality}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Venue:</span>
                            <span className="doctor-venue">{doctor.venue}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Email:</span>
                            <span className="doctor-email">{doctor.email}</span>
                        </div>
                    </div>
                    <button className="book-appointment-btn" onClick={() => handleOnClick(doctor)}>
                        Book Appointment
                    </button>
                </div>
            ))}
        </div>
    );
};

export default DoctorList;