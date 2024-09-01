import axios from "axios";

var baseURL="http://shibe.online/api/shibes"

function getFullURL(number){
    return `${baseURL}?count=${number}&urls=true&httpsUrls=false`
}

//https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/
async function getProducts(number){
    //Obtengo los datos de la API
    var fullURL=getFullURL(number);
    var response = await axios.get(fullURL);
    var data= await response.data;
    
    //Los formateo
    var dataFormat=[]
    for(let i=0;i<data.length;i++){
        dataFormat.push({title: `Shibe ${i}`,image: data[i]});
    }

    return dataFormat;
}

export default getProducts;