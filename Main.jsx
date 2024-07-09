import me from './me.jpg';

const Main = () => {
    const goToSee = () => {
            window.location.replace('https://Joshua1418.github.io/JosueNzanza/');
        }
    return ( 
        
        <div className="mainContainer">
            <div className="photoContainer">
                <img src={me} alt="myPhoto" />
            </div>
            <div className="contenuContainer">
            <p>I am learning the full stack web development using mySQL, Express, React.js, et Node.js to develop web applications.</p>
        </div>
            <div className="buttonContainer">
                <button onClick={goToSee}>Click!</button>
            </div>
        </div>
    );
};
 
export default Main;