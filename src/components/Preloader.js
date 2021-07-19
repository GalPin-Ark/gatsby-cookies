import React, {  } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Preloader = () => {
    return (


        <div
            id="___loader"
            style={{
                alignItems: 'center',
                background: 'linear-gradient(134deg, #5b26bf 0%, #5096f4 100%)',
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 1002,
                width: '100%',
                height: '100vh',
            }}
        >
            <Player
                src="/animations/loader.json"
                style={{ height: '300px', width: '300px', position: 'relative' }}
                autoplay={true}
                loop={true}
                renderer="html"
            />
        </div>
    );
};
export default Preloader