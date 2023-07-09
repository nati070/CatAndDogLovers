import axios from 'axios'

const  SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS

type DataWeatherType = {
    location: string;
    temperature: number;
    conditionIcon: string;
}
const getWeatherData = async (lat:number,lng: number) : Promise<DataWeatherType>=>{
       return axios.post(`${SERVER_ADDRESS}/weather`,{lat,lng}).then(resp => ({location: resp.data.location ,temperature: resp.data.temp_f ,conditionIcon: resp.data.icon}))
}
type ImgUrlType = {
    img_url: string;
}
const getRandomDogsImg = async () : Promise<ImgUrlType>=>{
    return  axios.get(`${SERVER_ADDRESS}/dogs/get-random-img`).then(resp => ({img_url: resp.data.dog_img_url}))
}

const getRandomCatsImg = async (): Promise<ImgUrlType> =>{
    return  axios.get(`${SERVER_ADDRESS}/cats/get-random-img`).then(resp => ({img_url: resp.data.cat_img_url})) 
}
type AnimalType =  'cat' | 'dog';

const getRandomImg = async(animalType: AnimalType): Promise<ImgUrlType>=>{
    if(animalType === 'cat'){
        return  getRandomCatsImg()
    }
    else{ // if(animalType === 'dog'){
        return  getRandomDogsImg()
    }
}

  // return the img as 64 base 
  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();      
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };


export {getWeatherData,getRandomImg,getBase64,AnimalType,ImgUrlType} 