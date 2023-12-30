
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

          <div className="container-fluid">
            <Link className="navbar-brand" to="/">TextUtils</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>   
                  {/* link ki jaga a aur href bhi use kar sagte the usse page kaam tho karenga lekin reload hone lag jayenga jo hum nahi chahate */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">{props.about}</Link>
                </li>
              </ul>
              {/* <div className="d-flex">
                <div className="bg-primary rounded mx-2 my-2" style = {{height:"30px", width : "30px", cursor : "pointer"}} onClick = {()=>{props.theme('primary')}}>
                </div>
                <div className="bg-success rounded mx-2 my-2" style = {{height:"30px", width : "30px", cursor : "pointer"}} onClick = {()=>{props.theme('success')}}>
                </div>
                <div className="bg-danger rounded mx-2 my-2" style = {{height:"30px", width : "30px", cursor : "pointer"}} onClick = {()=>{props.theme('danger')}}>
                </div>
                <div className="bg-warning rounded mx-2 my-2" style = {{height:"30px", width : "30px", cursor : "pointer"}} onClick = {()=>{props.theme('warning')}}>
                </div>
              </div> */}
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-warning" type="submit">Search</button>
              </form>
            </div>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode === 'light'?'grey':'light'} mx-3`}  >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.theme}  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Dark Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light'?'grey':'light'} mx-3`} >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.theme2}  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Dark Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light'?'grey':'light'} mx-3`} >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.theme3}  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Yellow Dark Mode</label> */}
          {/* </div> */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'grey':'light'} mx-3`} >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {()=>{props.theme(null)}}  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </nav>
      </div >
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  about: "Set about here",
};
