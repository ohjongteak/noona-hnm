import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from 'react-router-dom'
const NavBar = () => {
  const menuList =['여성','Divided','남성',"신생아/유아","아동","H&M Home","Sale","지속가능성"]
  const navigate = useNavigate();

  //const handleLogin = () => {
  //     navigate('/login'); // 로그인 페이지로 이동
  //};
  
  const search = (event) =>{
    if(event.key==="Enter"){
      let keyword = event.target.value
      
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>
     <div className='login-button'>
        <FontAwesomeIcon icon={faUser}/> 
        <div>
        <Link to='/login'>로그인</Link>
        </div>
     </div>
     <div className='nav-section'>
        <img width={100} src='https://download.logo.wine/logo/H%26M/H%26M-Logo.wine.png'/>
    </div>
    <div className='menu-area'>
       
          <ul className='menu-list'>
            {menuList.map((menu)=> (
              <li>{menu}</li>
            ))}
          </ul>

       
        <div className='search-section'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='Text' onKeyPress={(event)=>search(event)}/> 

        </div>
    </div>

    </div>
    
  )
}

export default NavBar
