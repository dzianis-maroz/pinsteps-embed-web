import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { RouteDataBlock } from '../RouteDataBlock';
import { API } from '../../services/api';

export const FetchedData = (props) => {

    console.log(props)

    const { path, id } = props;

    const url = `${path}/${id}?extra=picture,person,localities,countries,milestones`;

    const [data, setData] = useState();

    const getData = async(path) => {
        
        try {
          const response = await API.get(path);
          const result = await response.json();
          setData(result);
        } catch (error) {
            console.log(error);
        };

      };

    useEffect(() => {
        if(!data) {
            getData(url);
        } else {
            return data;
        }  
    }, []);

    return(
        <>
            {Boolean(data) && <RouteDataBlock data = {data} {...props}/>}
        </>
    );
};

FetchedData.propTypes = {
    path: PropTypes.string, 
    id: PropTypes.string,
};

export default FetchedData;