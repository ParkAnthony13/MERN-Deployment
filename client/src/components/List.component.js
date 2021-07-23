import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Router, Link, navigate } from '@reach/router'

const ListComponent = props => {
    const[allPets,setAllPets]=useState([])
    const{likes,setLikes}=props

    const clickEdit = (e,id) => {
        e.preventDefault()
        navigate(`/pets/${id}/edit`)
    }
    const handleClick = (e,id,idx) => {
        e.preventDefault()
        navigate(`/pets/${id}`)

    }
    useEffect( () => {
        axios.get("http://localhost:8000/api/belt")
            .then(res => {
                console.log(res.data)
                setAllPets(res.data.allBelts)
                console.log(allPets)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return(
        <div style={{display:"flex",justifyContent:"center",width:"50%",flexDirection:"column",margin:"auto"}}>
            <div className="d-flex justify-content-between">
                <h1 style={{color:"rebeccapurple"}}>Pet Shelter</h1>
                <Link to="/pets/new">add a pet to the shelter</Link>
            </div>
            <h3>These pets are looking for a good home</h3>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",width:"300px",outline:"2px solid black"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th colspan="1" >Type</th>
                            <th colspan="1" >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPets.map( (pet, idx) => {
                            return(
                                <tr key={idx}>
                                    <td >{pet.name}</td>
                                    <td >{pet.type}</td>
                                    <td ><button className="btn btn-secondary" onClick={(e,id,idx) => handleClick(e,pet._id,idx)}>Details</button><button className="btn btn-dark" onClick={(e,id) => clickEdit(e,pet._id)}>Edit</button></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListComponent