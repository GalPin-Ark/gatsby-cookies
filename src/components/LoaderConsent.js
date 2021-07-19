import useCookie from './useCookie';
import CookieConsent from 'react-cookie-consent';
import React, { useState, useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LoaderConsent = () => {
    const cookieRef = React.createRef();

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.addEventListener('load', () => {
                setDisplayDelay(1000);
            });
        }
        setDisplayDelay(3000);
        return () => {
            window.removeEventListener('load', null);
        };
    }, []);
    const setDisplayDelay = m => {
        setTimeout(function () {
            if (typeof document !== 'undefined') {
                document.getElementById('loader-button')?.click();
            }
        }, m);
    };
    return (
        <CookieConsent
            ref={cookieRef}
            disableStyles={true}
            buttonId="loader-button"
            style={{
                alignItems: 'center',
                background: 'transparent',
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
            buttonStyle={{ display: 'none' }}
        >
            <Player
                src="/animations/loader.json"
                style={{ height: '300px', width: '300px', position: 'relative' }}
                autoplay={true}
                loop={true}
                renderer="html"
            />
        </CookieConsent>
    );
};
export default LoaderConsent