import axios, * as data from "axios";

function connectApi(url){

    axios.get(url)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    
}
connectApi("https://jsonplaceholder.typicode.com/users")