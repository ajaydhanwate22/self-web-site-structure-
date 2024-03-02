import React from 'react'

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-6">
               <h1 style={{color:"white", fontSize:"100px", fontWeight:"800",  marginTop:"150px"}}>
                Hello i am a web developer!!
               </h1>
               <div style={{justifyContent:"space-between"}}>
                <button type="button" class="btn btn-primary" style={{marginTop:"70px", fontSize:"25px", borderRadius:"20px"}}>Hire Me </button>
               <button type="button" class="btn btn-primary"style={{marginTop:"70px", fontSize:"25px", marginLeft:"10px", borderRadius:"20px"}}>My Works</button>
               </div>
            </div>
            <div className="col-6">
                
                 <img  style={{marginTop:"30px", borderRadius:"60px", marginLeft:"120px"}} src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww" alt="" />   
                
            </div>
        </div>
      </div>
    </>
  )
}
