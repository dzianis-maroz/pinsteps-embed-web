
export const BuyRoute = (props) => {

    const { id } = props.match.params;

    const routeUrl = `https://pinsteps.page.link/?amv=35&apn=com.pinsteps&efr=0&ibi=com.pinsteps.ios&isi=1271374440&link=https%3A%2F%2Fweb.pinsteps.com%2Fshare%2F${id}%3Fl%3Den`;

    return (
        <div>
            <h1>Buy Route</h1>
            <a href = {routeUrl}><button>Get route</button></a>
        </div>
    )
}; 

export default BuyRoute;