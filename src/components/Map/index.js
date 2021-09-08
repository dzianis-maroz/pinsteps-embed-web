import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

import './styles.css'

const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1IjoiaXBvbG90c2t5IiwiYSI6ImNrbHo2czhqMDE2azMydXJ6enN1dWRmc3IifQ.iVzzrssyyu32mbAAMXR0ZA'

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = REACT_APP_MAPBOX_TOKEN;

export const Map = (props) => {

    const { route, history } = props;

    console.log(route, 'ROUTE')

    const mapContainer = useRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 11,
            center: [route.milestones[0].longitude, route.milestones[0].latitude]
        });


        route.milestones.forEach((point, index) => {
            const popup = new mapboxgl.Popup({ closeOnClick: false })
            const { title, description } = point;
            new mapboxgl.Marker()
            .setLngLat([point.longitude, point.latitude])
            .setPopup(new mapboxgl.Popup().setHTML(`<h4>${title}</h4><p>${description}</p>`))
            .addTo(map);
        });

        return map;
        }, []);
    
    
    const goHome = () => {
        history.push('/');
      };

    return (
        <>
            <div className="map-container" ref={mapContainer} />
            
            <button onClick = {goHome}>Go Home</button>
        </>
    )};

export default Map;