import React from 'react';
import Header from './Header';

const loading = () => {
    return (
        <React.Fragment>
            <Header />
            <center>
                <div className="lds-ellipsis">
                    <div></div><div></div><div></div><div></div>
                </div>
            </center>
        </React.Fragment>
    );
}

export default loading;
