import React  from 'react';
import loading from './loading.png';

const Spinner = ()=>  {
            return (
            <div className="text-centre">

             <img className="my-3" src={loading}  alt="loading"/>

            </div>
        )
}
export default Spinner
