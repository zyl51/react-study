import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        
        return (
            <nav className="my_navbar navbar-dark navbar bg-dark navbar-expand-lg">
                <a className="my_navbar_font navbar-brand" href="#">
                    <img style={{marginLeft:"6px"}} src="https://v4.bootcss.com/docs/4.6/assets/brand/bootstrap-solid.svg" width="32" height="32" className="d-inline-block align-top" alt=""></img>
                    Rust
                </a>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                    <div className="navbar-nav">
                        <a style={{marginLeft:"6px"}} className="my_navbar_font nav-link active" href="#">首页</a>
                        <a style={{marginLeft:"6px"}} className="my_navbar_font nav-link active" href="#">社区</a>
                        <a style={{marginLeft:"6px"}} className="my_navbar_font nav-link active" href="#">不知道</a>
                        <a style={{marginLeft:"6px"}} className="my_navbar_font nav-link active">其他</a>
                    </div>
                </div>
            </nav>
        );
    }

}
 
export default Navbar;