import { Clock } from './Clock';
import React, { useState } from 'react';

export const ClockApp = () => {
    const [showClock, setShowClock] = useState(true);

    const handleUnmount = () => {
        setShowClock(false);
    };

    const handleMount = () => {
        setShowClock(true);
    }

    return (
        <React.StrictMode>
            {showClock && <Clock />}
            <button onClick={handleMount}>Mount Clock</button>
            <button onClick={handleUnmount}>Unmount Clock</button>
        </React.StrictMode>
    );
};