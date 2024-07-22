import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { coincontext } from '../../context/coincontext'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const{setcurrency}= useContext(coincontext)

    const currencyhandler=(event)=>{
switch(event.target.value){
    case"usd":{
        setcurrency({name:"usd",symbol:"$"})
        break;
    }
    case"eur":{
        setcurrency({name:"eur",symbol:"€"})
        break;
    }
    case"inr":{
        setcurrency({name:"inr",symbol:"₹"})
        break;
    }
    default:{
        setcurrency({name:"usd",symbol:"$"})
        break;
    }
    
}
    }
  return (
    <div className='navbar'>
      <Link to={'/'}>
      <img src={logo} alt="" className='logo' />
      </Link>
      <ul>
       <Link to={'/'} ><li>Home</li></Link>
       <div className="nav-right">
        <select onChange={currencyhandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
      </div>
        
      </ul>
    </div>
  )
}

export default Navbar
