import React,{useEffect,useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';

export default function Home()
{
    
    const [user,setUser]=useState([]);
    
    useEffect(()=> {
        loadUsers();
    },[]);
    
    const loadUsers= async ()=> {
        const response=await axios.get(`http://localhost:8080/getvhcl`);
        setUser(response.data);
    };
    
    const deleteVehicle=async(id) =>{
        await axios.delete(`http://localhost:8080/deletevhcl/${id}`);
        loadUsers();
    };
    
    return(
        <div className='container'>
            <div className='navbar'>
                <span className='home'>Home</span>
                <Link className='btn btn-outline-success mx-2' to={'/post'}>ADD YOUR VEHICLE</Link>
            </div>
            <table className="table border dark shadow">
                <thead>
                    <tr className='r'>
                        <th scope='col'>ID</th>
                        <th scope='col'>Register Number</th>
                        <th scope='col'>Owner Name</th>
                        <th scope='col' className='Actions'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user)=>(
                        <tr key={user.id}>
                            <td className='idt1'>{user.id}</td>
                            <td>{user.regno}</td>
                            <td>{user.ownername}</td>
                            <td>
                                <Link className='btn btn-outline-success mx-2' to={`/getdetail/${user.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mx-2' to={`/update/${user.id}`}>Edit</Link>
                                <button className='btn  btn-outline-danger mx-2' onClick={()=>deleteVehicle(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}