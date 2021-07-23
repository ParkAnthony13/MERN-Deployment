import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Router, Link, navigate } from '@reach/router'


const AddComponent = props => {
    // storing input name value
    const[formState,setFormState]=useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:"",
        likes:0
    })
    // storing validation errors from post/create
    const[valErrors,setValErrors]=useState("")

    // tracking input changes and setting input to formState
    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
        console.log(formState)
    }

    // submit button for sending formState to post/create request
    const handleSubmit = e => {
        e.preventDefault()
        console.log("submit axios")
        axios.post(`http://localhost:8000/api/belt/`,{...formState})
            .then(res=> {
                console.log(res)
                setValErrors("")
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data)
                const{errors} = err.response.data
                setValErrors(errors)
                console.log(valErrors)
            })
    }

    return(
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h1>Pet Shelter</h1>
                <Link to="/">Back to Home</Link>
            </div>
            <div style={{height:"auto",width:"auto",outline:"2px solid black",padding:"5px"}}>
                <h3 style={{color:"rebeccapurple"}}>Edit this author</h3>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"5px"}}>
                    <form onSubmit={handleSubmit} className="container">
                        <div className="d-flex">
                            <div className="d-flex" style={{flexDirection:"column",width:"200px"}}>
                                <div>
                                    <label>Pet Name:</label>
                                    <input name="name" type="text" onChange={handleChange}/>
                                    {valErrors.name ? <p style={{color:"red"}}>{valErrors.name.message}</p> : null}
                                </div>
                                <div>
                                    <label>Pet Type:</label>
                                    <input name="type" type="text" onChange={handleChange}/>
                                    {valErrors.type ? <p style={{color:"red"}}>{valErrors.type.message}</p> : null}
                                </div>
                                <div>
                                    <label>Pet Description:</label>
                                    <input name="description" type="text" onChange={handleChange}/>
                                    {valErrors.description ? <p style={{color:"red"}}>{valErrors.description.message}</p> : null}
                                </div>
                            </div>
                            <div>
                                <h3>Skills (optional):</h3>
                                <div>
                                    <label>Skill 1:</label>
                                    <input name="skill1" type="text" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label>Skill 2:</label>
                                    <input name="skill2" type="text" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label>Skill 3:</label>
                                    <input name="skill3" type="text" onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddComponent