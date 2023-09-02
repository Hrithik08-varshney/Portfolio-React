import React from 'react'
import "./style.css";
const Navbar = () => {
  const routeArr=[
    {
      name:"Home"
    },
    {
      name:"About"
    },
    {
      name:"Projects"
    },
    {
      name:"Skills"
    },
    {
      name:"Contact"
    }
  ]
  return (
    <div className="navbar_comp flexCommon">
        <div className="navbar_name df jcsb">
          <div className="firstName">
               Hrithik
          </div>
          <div className="lastName">
            Varshney
          </div>
        </div>
        <div className="navbar_route df jcsa cpoint">
           {
            routeArr.map((item,index)=>{
                return (
                  <span className="routeValues" key={item+index}>
                    {item.name}
                  </span>
                )
            })
           }
        </div>
    </div>
  )
}

export default Navbar