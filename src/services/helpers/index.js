
export const getTimeFromMins = (mins) =>  {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return `${hours}h ${minutes}m`;
};

export const getDistanceFromMeters = (meters) =>  {
    let distance = (meters/1000);
    return `${distance.toFixed(1)}km`;
};

export const createAuthorAvatar = (fullName) => {
    const colors = ['#0000FF', '#8A2BE2', '#A52A2A', '#DC143C' ];

    const randomColor = colors[Math.floor(Math.random() * Math.floor(3))];

    const firstNameAndLastName = fullName.split(' ');

    const initials = `${firstNameAndLastName[0].substr(0, 1)}` + `${firstNameAndLastName[1].substr(0, 1)}`;

    return (
        <div className = 'author-photo' style={{backgroundColor: randomColor, color: "#ffffff"}}>
            <div style={{
                position: 'absolute', 
                left: '50%', 
                top: '50%', 
                color: "#ffffff",
                transform: 'translate(-50%, -50%)'}}>
                {initials.toUpperCase()}
            </div>
        </div>
    );
};