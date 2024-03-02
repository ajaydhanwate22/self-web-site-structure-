import React from 'react'
import Resume from './Resume'

export default function About() {
  return (
    <>
    <div className="container" >
        <div className="row" style={{marginTop:"150px"}}>
            <div className="col-6">
                <img style={{borderRadius:"10px", marginLeft:"100px"}} src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww" alt="" />
            </div>
            <div className="col-6">
                <h1 style={{color:"white", fontSize:"100px"}} >About Me</h1>
                <p style={{color:"white", marginTop:"50px"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className="flex" style={{color:'white'}}>
                    <h5 style={{marginTop:"30px"}}>Name:Dhanwate Ajay</h5>
                    <h5 style={{marginTop:"30px"}}>Address: Shirdi,Maharashtra </h5>
                    <h5 style={{marginTop:"30px"}}>Email:ajaydhanwate23@gmail.com</h5>
                    <h5 style={{marginTop:"30px"}}>Phone no-9579218227</h5>
                </div>  
            </div>
        </div>
    </div>
    <Resume/>
    </>
  )
}
