import { gsap } from 'gsap';

export const animateSkills = (listItems) => {
    gsap.from(listItems, {
        opacity: 0,
        //y: 100,
        stagger: 0.1,
        //duration: 0.1,
    });
};
