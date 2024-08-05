import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-XXXXXXXXX-X'; // Replace with your tracking ID
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page) => {
    ReactGA.pageview(page);
};
