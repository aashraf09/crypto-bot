import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [screenInfo, setScreenInfo] = useState({ screenSize: '', orientation: '' });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const orientation = width > height ? 'landscape' : 'portrait';
            let screenSize = '';

            if (width <= 640) {
                screenSize = 'mobile';
            } else if (width <= 1224) {
                screenSize = 'tablet';
            } else {
                screenSize = 'desktop';
            }

            setScreenInfo({ screenSize, orientation });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenInfo;
};

export default useScreenSize;
