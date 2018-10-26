const Home = () => {
    
}
function  fillBrands(brandModel) {
    let phoneDetails = null;
    phoneDetails = Data.filter(x => x.model === brandModel)
    console.log(phoneDetails);
    return  phoneDetails;
}