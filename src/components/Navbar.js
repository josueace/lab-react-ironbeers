// components/Navbar.js

import React from 'react';
import {Link} from 'react-router-dom';
import Glyphicon from '@strongdm/glyphicon'

const Navbar = () => {

    
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="link">
          <Link to={`/`}><a class="navbar-brand link" href="/"><Glyphicon glyph='glyphicon glyphicon-home' /></a></Link>
        </div>
      </nav>
  )
}

export default Navbar;