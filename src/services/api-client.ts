import axios from "axios";
 
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1df25f20765a47dbb339f4a4886ffa5f'
    }
})