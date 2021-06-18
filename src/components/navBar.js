import React, { useContext, useState } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import {Authcontext} from '../context/auth-context'

const NavBar = () => {
  const auth = useContext(Authcontext)
  const logout= ()=>{
    auth.logout()
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand></Navbar.Brand>
      <Nav className="mr-auto"></Nav>
 
        <Button variant="outline-info" onClick={()=>{logout()}}>Logout</Button>
      
    </Navbar>
  );
};

export default NavBar;
