import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const  api = axios.create({
    baseURL: 'https://daniel-movieflix.herokuapp.com',
});

export const TOKEN = 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==';

export async function userToken(){
    const token = await AsyncStorage.getItem('@token')
    return token;
}


//Chamadas ao Backend 
export async function getMovies(){

    const authToken = await userToken(); 
    const res = api.get(
        `/movies`,{
            headers:{
                'Authorization': `Bearer ${authToken}`,
            },
        });
    return res;
}

export async function getMoviesByGenre(){

    const authToken = await userToken(); 
    const res = api.get(`/movies`,{
            headers:{
                'Authorization': `Bearer ${authToken}`,
            },
        });
    return res;
}

export async function getMoviesById(id: number){

    const authToken = await userToken(); 
    const res = api.get(
        `/movies/${id}`,{
            headers:{
                'Authorization': `Bearer ${authToken}`,
            },
        });
    return res;
}

export async function saveAvaliation(id: number, text:string){
    const authToken = await userToken(); 

    const request = {
        "text": text,
        "movieId": id
    }
    /* 
    const res = api.post(`/reviews/${id}`, text,{
            headers:{
                'Authorization': `Bearer ${authToken}`,
            },
        });
    return res;

    */
    
    const res = api.post(`/reviews`, request,{
            headers:{
                'Authorization': `Bearer ${authToken}`,
            },
        });
    return res;
}


export async function getGenres(){

    const authToken = await userToken(); 
    const res = api.get(
        `/genres`,{
            headers:{
                'Authorization': `Bearer ${authToken}`,
            },
        });
    return res;
}