import React from 'react';
import FormUpdatePeople from '../Components/FormUpdatePeople';


export const UpdatePeoplePage = (props) => {
    console.log(props.location.aboutProps.data);
    return (

        <div>
            <br/>
            <div className="container">
            <FormUpdatePeople/>
            </div>
        </div>

    )
}
 