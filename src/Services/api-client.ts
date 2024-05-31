import axios from "axios";


export default  axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'b88a0b3dc5a64c5b9aeaef29d8eeba30'
    }
})