import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

class Footer extends React.Component {

    openGithub = () => {
        window.open("https://github.com/micahlanham/Poke.git");
    }

    render() {
        return (
            <>
                <div className="app__footer noselect">
                    <div>
                        
                    </div>
                    <div onClick={this.openGithub} className="github__icon">
                        <GitHubIcon></GitHubIcon>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;