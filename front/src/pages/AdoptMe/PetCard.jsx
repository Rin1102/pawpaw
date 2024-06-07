
import "./AdoptMe.css";
import PropTypes from 'prop-types';
import  { useState,useEffect } from 'react';
function getTimeRemaining(dueDate) {
    const now = new Date();
    const differenceInMilliseconds = dueDate - now;
    if (differenceInMilliseconds < 0) {
        return '0 days, 0 hours, 0 minutes, 0 seconds';
    }
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);

    return `${differenceInDays} days, ${differenceInHours % 24} hours, ${differenceInMinutes % 60} minutes, ${differenceInSeconds % 60} seconds`;
}
function PetCard(props) {

    const [buttonClass, setButtonClass] = useState('btn-modal');
    const [buttonText, setButtonText] = useState('adopt me');
    const [isLost,setIsLost] = useState(props.isLost);
    const [remainingTime, setRemainingTime] = useState(getTimeRemaining(props.dueDate));
    const [showButton, setShowButton] = useState(false);
    const handleClick = () => {
        setButtonClass('btn-modal clicked');
      setButtonText('ADOPTED!');
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const timeRemaining = getTimeRemaining(props.dueDate);
            setRemainingTime(timeRemaining);
            if (timeRemaining === '0 days, 0 hours, 0 minutes, 0 seconds') {
                setIsLost(false);
                setShowButton(true);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [props.dueDate]);
    return (
        
        <div className="cards">
          
            <div className="carr">
                <img src={props.image} alt="petimg" className="card_img"></img>
                <div className="card_info">
                    <span className="pet_name">{props.name}</span>
                    <br />
                    <span className="pet_info">Breed: {props.breed}</span>
                    <br />
                    <span className="pet_info">age: {props.age}</span>
                    <br/>
                    <span className="pet_info">Localisation: {props.localisation}</span>
                    <br />
                    <span className="pet_info">temperament: {props.temperament}</span>
                    <br />
                    <span className="pet_info">Contact: {props.phoneNumber}</span>
                    {isLost && !showButton ? (
                    <p>Time until found: {remainingTime} </p>
                ) : (
                    <button onClick={handleClick} className={buttonClass}> {buttonText} </button>
                )}
                    
                    
                    </div>
            </div>
        </div>
        
    )
;}
PetCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    temperament: PropTypes.string.isRequired,
    localisation: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    isLost: PropTypes.bool,
    lostTime: PropTypes.number,
    dueDate: PropTypes.instanceOf(Date),
  
};
PetCard.defaultProps = {
    dueDate:null
};

export default PetCard;