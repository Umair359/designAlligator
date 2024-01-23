import React, { useEffect } from 'react';

const AnimatedText = ({ text }) => {
    const arrayOfLetters = text.split('');
    useEffect(() => {
        const letters = document.querySelectorAll('.letter');
        const delay = 400; // Delay between letters in milliseconds
        const fadeInDelay = 100; // Delay before starting fade-in
        const fadeOutDelay = 8000; // Time to stay visible before starting fade-out

        const fadeInOutAnimation = () => {
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.opacity = '1';
                    letter.style.transform = 'translateX(50px)';
                }, fadeInDelay + (letters.length - index - 1) * delay);

                setTimeout(() => {
                    letter.style.opacity = '0';
                    letter.style.transform = 'translateX(100px)';
                }, fadeInDelay + fadeOutDelay + (letters.length - index - 1) * delay);
            });

            // Reset positions after fade-out is completed
            setTimeout(() => {
                letters.forEach((letter, index) => {
                    letter.style.opacity = '0';
                    letter.style.transition = 'none'; // Disable transition for instant reset
                    letter.style.transform = 'translateX(-100px)';
                });
            }, fadeInDelay + fadeOutDelay + letters.length * delay);

            // Restore transitions after a brief delay
            setTimeout(() => {
                letters.forEach((letter) => {
                    letter.style.transition = ''; // Restore transition
                });
            }, 50); // Adjust the delay as needed
        };

        fadeInOutAnimation();

        const intervalId = setInterval(fadeInOutAnimation, fadeInDelay + fadeOutDelay + letters.length * delay);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <h2 className="animated-text">
            {arrayOfLetters.map((item) => <span className="letter">{item}</span>)}
        </h2>
    );
};

export default AnimatedText;