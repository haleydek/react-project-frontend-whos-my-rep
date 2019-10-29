import React from 'react';
import MainTitle from '../components/header/MainTitle';
import NavBar from '../components/header/NavBar';

class HeaderContainer extends React.Component {
    render(){
        return (
            <div className="header">
                <header>
                    <MainTitle />
                    <NavBar />
                </header>
            </div>
        )
    }
}

export default HeaderContainer;