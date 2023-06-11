import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddDetails() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
  
    id: '',
    regno: '',
    ownername: '',
    manufacturer: '',
    modelname: '',
    vehicletype: '',
    fueltype: '',
    regyear: '',
    cc: '',
    regstate:'',
    colour:''
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { id, regno, ownername, manufacturer, modelname, vehicletype, fueltype, regyear, cc, regstate, colour } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/postvhcl",user);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Id"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Registration Number
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Registration Number"
                name="regno"
                value={regno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Owner Name
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The ownername"
                name="ownername"
                value={ownername}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Manufacturer
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Manufacturer"
                name="manufacturer"
                value={manufacturer}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Model Name
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter modelname"
                name="modelname"
                value={modelname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Vehicletype
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Vehicletype"
                name="vehicletype"
                value={vehicletype}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Fuel Type
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter fueltype"
                name="fueltype"
                value={fueltype}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Registered Year
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Registered Year"
                name="regyear"
                value={regyear}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                cc
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter cc"
                name="cc"
                value={cc}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter registered state"
                name="regstate"
                value={regstate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Colour
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter colour"
                name="colour"
                value={colour}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success my-2">
              Add Details
            </button>
            <Link className="btn btn-outline-danger my-2 mx-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    );
}
