import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import {NavLink} from 'react-router-dom';
import {Link,useHistory} from 'react-router-dom';

function Header({backButton}) {
    const history=useHistory();
    return (
        <div className="header">
        {backButton? (<IconButton><ArrowBackIosSharpIcon onClick={()=>history.push(backButton)} fontSize="large"/></IconButton>):(<IconButton><PersonIcon fontSize="large"/></IconButton>)}
        
        <Link to="/">
        <img src="https://www.1min30.com/logo/wp-content/uploads/2018/04/logo-Tinder-500x281.png" className="image" alt="" />
        </Link>
        <NavLink to="./chat"><IconButton><ForumIcon fontSize="large"/></IconButton></NavLink>
          
        </div>
    )
}

export default Header
