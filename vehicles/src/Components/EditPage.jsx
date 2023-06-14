import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function EditDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState({
    id: "",
    regno: "",
    ownername: "",
    vehicletype: "",
    manufacturer: "",
    modelname: "",
    fueltype: "",
    cc: "",
    regstate: "",
    colour: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/getdetail/${id}`);
    setUser(result.data);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const {
    regno,
    ownername,
    vehicletype,
    manufacturer,
    modelname,
    fueltype,
    cc,
    regstate,
    colour,
  } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updatevhcl`, user);
    navigate("/home");
  };

  return (
    <div className="editcontainer">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Registration Number:
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Bus_NAME"
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
                placeholder="Enter Owner Name"
                name="ownername"
                value={ownername}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                vehicletype
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The vehicletype"
                name="vehicletype"
                value={vehicletype}
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
                placeholder="Enter Your Destination"
                name="modelname"
                value={modelname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                FuelType
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Total No of Passengers"
                name="fueltype"
                value={fueltype}
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
                placeholder="Give Us The cc"
                name="cc"
                value={cc}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Registered State
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Registered State"
                name="regstate"
                value={regstate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                colour
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The colour"
                name="colour"
                value={colour}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button id="lk2" type="submit" className="btn btn-primary my-2">
              Update Details
            </button>
            
            <Link id='lk2' className="btn btn-primary my-2 mx-2" to={"/home"}>
              Back to Home
            </Link>
          </form>
        </div>
      </div>
    </div>
    );
}
