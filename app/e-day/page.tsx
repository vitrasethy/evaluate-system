"use client";
import React from 'react';

const Test = () => {
    return (
        <div>
            {isMobile() ? (
                <h1>This is a mobile view</h1>
            ) : (
                <h1>This is a computer view</h1>
            )}
        </div>
    );
};

const isMobile = () => {
    const userAgent =
        typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(
        userAgent.match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
    );
    return mobile;
};

export default Test;




