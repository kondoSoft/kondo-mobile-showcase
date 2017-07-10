import React from 'react'
import NavBar from '../navbar'

var Header = (props)=>{
  console.log(props);
  const { menu } = props
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top" id="menu">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <NavBar menu={menu}/>
        </div>
    </nav>
  )
}
export default Header
