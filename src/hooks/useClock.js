import { useEffect, useState } from 'react';



function formatDate(date) {

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const timeCount = setInterval(() => {
            const now = new Date();

            const newTime = formatDate(now);

            setTimeString(newTime);
        }, 1000);

        return () => {
            clearInterval(timeCount);
        }
    }, []);

    return { timeString };
}

export default useClock;


