import { paths } from '../services/api/paths';
import { FetchedData } from '../components/FetchedData';

export const RoutePage = (props) => {

    const { id } = props.match.params;

    return (
        <>
            <FetchedData path = {paths.tracks} id = {id}/>           
        </>
    ); 
};


export default RoutePage;