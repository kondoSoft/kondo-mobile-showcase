import React from 'react'

var NavBar = (props)=>{
  const { menu } = props
  return(
    <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
            {menu.map((item, i)=>(
              <li key={i}>
                <a href={item.href} className="scroll-nav">{item.name}</a>
              </li>
            ))}
        </ul>
    </div>
  )
}
export default NavBar
