import axios from "axios";

export default class HttpService {
    constructor(){
        this.url = 'https://productapiserv.azurewebsites.net/api/ProductsAPI';
    }

    async getProducs(){
        const response = await axios.get(this.url);
        console.log(`In Service ${response.data}`);
        return response; 
    }


}