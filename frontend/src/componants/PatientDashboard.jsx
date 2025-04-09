import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBBtn } from "mdb-react-ui-kit";
import PatientProfilePage from './PatientProfilePage';
import "./dashboard.css";

function PatientDashboard() {
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
                <PatientProfilePage />
            </div>
        </div>
    );
}

export default PatientDashboard;
