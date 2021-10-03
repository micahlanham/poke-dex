import React from 'react';

class Loading extends React.Component {

    openGithub = () => {
        window.open("https://github.com/micahlanham/Poke.git");
    }

    render() {
        return (
            <>
                <div className="app__container">
                    <div className="loading__text">
                        Loading
                    </div>
                </div>
            </>
        )
    }
}

export default Loading;