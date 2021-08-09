import React, {useState} from 'react';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () =>{
        setDarkMode(!darkMode);
    }
    if(darkMode){
        return (
            <div className="Header-l">
                <img className="Header__img" src="https://vignette.wikia.nocookie.net/international-entertainment-project/images/0/08/Rick_and_Morty_-_logo_(English).png/revision/latest?cb=20170408193423" alt="Logo" />
                <button className="Header__button" onClick={handleClick}>{darkMode ? 'Dark Mode ' : 'Lightn Mode'}</button>
            </div>
        );
    }else{
        return (
            <div className="Header-d">
                <img className="Header__img" src="https://vignette.wikia.nocookie.net/international-entertainment-project/images/0/08/Rick_and_Morty_-_logo_(English).png/revision/latest?cb=20170408193423" alt="Logo" />
                <button className="Header__button" onClick={handleClick}>{darkMode ? 'Dark Mode ' : 'Lightn Mode'}</button>
            </div>
        );
    }

}

export default Header;
