import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Pokedex from "../assets/images/pokedex.png";

class Header extends React.Component {


    openGithub = () => {
        window.open("https://github.com/micahlanham/Poke.git");
    }

    render() {
        return (
            <>
                <div className="app__header">
                    
                    <div className="poke__logos noselect">
                        <img src={Pokedex} alt="pokelogo" className="poke__logo" />
                    </div>
                    <div className="pokeball__box github__icon" onClick={this.openGithub}>
                        <GitHubIcon></GitHubIcon>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;
