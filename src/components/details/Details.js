import React from 'react';
import Data from '../../data/phone-dataset.json';


// const styles = {
//     card: {
//         maxWidth: 300,
//         width: 300,
//         margin: 20,
//         height: 500,
//         minWidth: 300
//     },
//     media: {
//         height: 400,
//     },
// }

function  fillBrands(brandModel) {
    let phoneDetails = null;
    Data.forEach(element => {
        if(element.model === brandModel){
            phoneDetails = element;
        }
    });
    return  phoneDetails;
}



export function Details(props) {

    const details = fillBrands(props.item);
    
    return(
        <div className="ItemDetails">
            <img src={details.img_url} alt={details.brand}/>
            <p>{details.model}</p>
        </div>
    );
}

export default Details;