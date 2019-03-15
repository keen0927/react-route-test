import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {

        const style = {
            marginBottom: 30
        }
        return (
            <div>
                <NavLink to="/">홈</NavLink><br />
                <NavLink to="/innovation">이노베이션</NavLink><br />
                <NavLink to="/innovationChildren">이노베이션 자식</NavLink><br />
                <NavLink to="/innovationChildren/1">이노베이션 자식1</NavLink><br />
                <NavLink to="/innovationChildren/13">이노베이션 자식13</NavLink><br />
                <div style={style}></div>
            </div>
        );
    }
}

export default Header;