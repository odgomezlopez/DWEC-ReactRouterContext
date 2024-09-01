import axios from "axios";


var APIKey="08751764176f4961a5397d99f5159bab"
var baseURL="https://api.spoonacular.com"

function getFullURL(search,number){
    return `${baseURL}/food/products/search?apiKey=${APIKey}&query=${search}&number=${number}&`
}

//https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/
async function getProducts(search,number){
    var fullURL=getFullURL(search,number);
    var response = await axios.get(fullURL);
    return await response.data.products;
}

export default getProducts;