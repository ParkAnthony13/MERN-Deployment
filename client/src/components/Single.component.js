import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'


const SingleComponent = props => {
    const[onePet,setOnePet] = useState("")
    const{id} = props
    const[firstVisit,setFirstVisit] = useState(true)
    const[pet,setPet]=useState("")


    const likeInc = (e) => {
        e.preventDefault()
        console.log("submit axios")
        if (firstVisit==true) {
            axios.put(`http://localhost:8000/api/belt/${props.id}`,{...onePet,likes:onePet.likes + 1})
                .then(res=> {
                    console.log(res)
                    setFirstVisit(false)
                })
                .catch(err => {
                    console.log(err.response.data)
                })
        }
    }
    const handleDelete = (e,id) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/belt/${id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
        navigate('/')
    }



    useEffect( () => {
        console.log("SP-start")
        setPet(id)
        axios.get(`http://localhost:8000/api/belt/${id}`)
            .then(res => {
                console.log(res.data.belt)
                setOnePet(res.data.belt)
            })
            .catch(err => console.log(`Encountered Error: ${err}`))
    },[firstVisit])

    return(
        <div>
            {onePet 
            ?<div>
                <div className="d-flex justify-content-between">
                    <h1>Pet Shelter</h1>
                    <Link to={'/'}>back to home</Link>
                </div>
                <div className="d-flex justify-content-between">
                    <h3>Details about {onePet.name}</h3>
                    <button className="btn btn-danger" onClick={(e,id) => handleDelete(e,onePet._id)}>Adopt Garfield</button>
                </div>
                <div className="d-flex" style={{outline:"2px solid black"}}>
                    <div>
                        <h5>Pet type:</h5>
                        <h5>Description:</h5>
                        <h5>Skills</h5>
                    </div>
                    <div style={{margin:"0px 2em"}}>
                        <p>{onePet.type}</p>
                        <p>{onePet.description}</p>
                        <div>
                            <p>{onePet.skill1}</p>
                            <p>{onePet.skill2}</p>
                            <p>{onePet.skill3}</p>
                        </div>
                    </div>
                </div>
                <div className="container d-flex m-3">
                    {firstVisit
                    ?<button className="btn btn-success" onClick={likeInc}>Like {onePet.name}</button>
                    :<button className="btn btn-secondary" onClick={likeInc}>Like {onePet.name}</button>}
                    <p className="m-3">{onePet.likes} like(s)</p>
                </div>
            </div>
            : null}
        </div>
    )
}


export default SingleComponent