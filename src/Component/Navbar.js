import React from 'react'
import Home from './Home'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid" style={{fontSize:"20px", fontWeight:"700" }}>
    <a className="navbar-brand" href="/">CLARK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">My Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Home/>

    </>
  )
}
