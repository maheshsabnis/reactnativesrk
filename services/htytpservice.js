import axios from "axios";

export default class HttpService {
    constructor(){
        const url = 'https://productapiserv.azurewebsites.net/api/ProductsAPI';
    }

    getProducs(){
        const response = axios.get(this.url);
        return response; 
    }


}