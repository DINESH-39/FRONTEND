import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Params,useParams,Link } from 'react-router-dom';
import './ViewPage.css';
export default function ViewDetails() {
  const [user, setUser] = useState({
    id: '',
    regno: '',
    ownername: '',
    vehicletype: '',
    manufacturer: '',
    modelname: '',
    fueltype: '',
    regyear: '',
    cc: '',
    regstate: '',
    colour:''
  });
  
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/getdetail/${id}`);
    setUser(result.data);
  };

  return (
    <div className="viewcontainer">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-2">Vehicle Details</h2>

          <div className="card">
            <div className="card-header">
              Details Of The Vehicle:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Id: </b>
                  {user.id || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Register Number: </b>
                  {user.regno || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Owner Name: </b>
                  {user.ownername || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Vehicle Type: </b>
                  {user.vehicletype || 'N/A'}
                </li>
                <li className="list-group-item ">
                  <b>Manufacturer: </b>
                  {user.manufacturer || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Model: </b>
                  {user.modelname || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Fuel Type: </b>
                  {user.fueltype || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Registered Year: </b>
                  {user.regyear || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Cc: </b>
                  {user.cc || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Registered State: </b>
                  {user.regstate || 'N/A'}
                </li>
                <li className="list-group-item">
                  <b>Colour: </b>
                  {user.colour || 'N/A'}
                </li>
              </ul>
            </div>
          </div>
          <Link id='lk' className="btn btn-primary my-2" name="vbt" to={"/home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    );
}