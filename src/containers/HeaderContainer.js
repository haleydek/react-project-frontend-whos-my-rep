import React from 'react';
import MainTitle from '../components/header/MainTitle';
import NavBar from '../components/header/NavBar';

class HeaderContainer extends React.Component {
    render(){
        return (
            <header>
                <MainTitle />
                <NavBar />
            </header>
        )
    }
}

export default HeaderContainer;