import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBBtn } from "mdb-react-ui-kit";
import DoctorProfilePage from './DoctorProfilePage';
import "./doctordashboard.css";

function DoctorDashboard() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="nav-buttons">
                    <MDBBtn 
                        onClick={() => navigate("/")} 
                        className="nav-btn"
                    >
                        Home
                    </MDBBtn>
                    <MDBBtn 
                        onClick={() => navigate("/calendar")} 
                        className="nav-btn"
                    >
                        Calendar
                    </MDBBtn>
                </div>
            </div>
            
            <div className="dashboard-content">
                <DoctorProfilePage />
            </div>
        </div>
    );
}

export default DoctorDashboard;
