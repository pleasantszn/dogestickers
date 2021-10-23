import React,{useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
const {REACT_APP_TRACKING_ID} = process.env;
const TRACKING_ID = REACT_APP_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


const RouteChangeTracker = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[]) ;

    return <div></div>;
};

export default withRouter(RouteChangeTracker);