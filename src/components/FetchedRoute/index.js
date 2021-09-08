import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { API } from '../../services/api';
import { Map } from '../Map'

export const FetchedRoute = (props) => {

    console.log(props)

    const { url } = props.match;
    const { history } = props;

    const [route, setRoute] = useState(null);

    const getRouteMap = async(path) => {
        
        try {
          const response = await API.get(path);
          const result = await response.json();
          setRoute(result);

        } catch (error) {
            console.log(error);
        };
      };

    useEffect(() => {

        if(!route) {
            getRouteMap(url);
        } else {
            return route;
        }; 
    }, []);

    return (
        <>
            {Boolean(route) && <Map route = {route} history = {history}/>}
       </>
    );
};


FetchedRoute.propTypes = {
    history: PropTypes.object, 
};

export default FetchedRoute;


