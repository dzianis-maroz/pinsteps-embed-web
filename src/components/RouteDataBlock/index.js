import PropTypes from 'prop-types';

import { getTimeFromMins, getDistanceFromMeters, createAuthorAvatar} from '../../services/helpers';

import './styles.scss';
import logo from '../../assets/images/pinsteps-logo-black2.png';

export const RouteDataBlock = ({ data }) => {

    const { title, picture, id, person, distance, duration, rating, is_payable, localities, countries } = data;

    const { crop_url } = picture;

    const { facebook_user_id, full_name } = person;

    const routeUrl = `https://pinsteps.page.link/?amv=35&apn=com.pinsteps&efr=0&ibi=com.pinsteps.ios&isi=1271374440&link=https%3A%2F%2Fweb.pinsteps.com%2Fshare%2F${id}`;
    
    return(
        <div id = 'route-data-block' className = 'route-data-block-style'>

            <div className = 'left-column'>
                
                    {Boolean(localities) && localities.length !== 0 ?
                    <h4>{localities[0].name}</h4> 
                    : Boolean(countries) && countries.length !== 0 ?
                    <h4>{countries[0].name}</h4>
                    : null}

                <p>{title}</p>

                <div className = 'route-details'>
                    <div>
                        <p className = 'parameter'>Distance</p>
                        <p className = 'parameter-value'>{getDistanceFromMeters(distance)}</p>
                    </div>
                    <div>
                        <p className = 'parameter'>Time</p>
                        <p className = 'parameter-value'>{getTimeFromMins(duration)}</p>
                    </div>
                    <div>
                        <p className = 'parameter'>Raiting</p>
                        <p className = 'parameter-value'>{rating}</p>
                    </div>
                </div>

                <div className = 'author'>
                
                    <a target='_parent' href = {`https://web.pinsteps.com/profile/${person.id}/tracks`}>

                        {
                            facebook_user_id ? 

                            <img src = {`https://graph.facebook.com/${facebook_user_id}/picture`} 
                            className = 'author-photo'/>

                            : <div className = 'author-photo'>{createAuthorAvatar(full_name)}</div>
                        }
                        
                    </a>

                    <p>{person.full_name}</p>
                </div>

            </div>

            <div className = 'right-column'>
                <img src = {crop_url}/>
                {

                is_payable ? 

                <a target='_parent' href = {routeUrl}><button>Buy route</button></a>   
                   
                : <a target='_parent' href = {routeUrl}><button>Get route</button></a>                
                
                }
            </div>

            <div className = 'logo'>
                <a target='_parent' href = 'https://pinsteps.com?utm_source=embed' target="_blank"><img src = {logo}/></a>  
            </div>
            
        </div>        
    );
};

RouteDataBlock.propTypes = {
    path: PropTypes.string, 
    data: PropTypes.object,
};

export default RouteDataBlock;

