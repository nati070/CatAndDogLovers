import { useEffect, useState } from "react";
import { getWeatherData } from "../utils";
import promiseWrapper from "../components/promiseWrapper";

type DataWeatherType = {
  location: string;
  temperature: number;
  conditionIcon: string;
};
/*
use for return  the data of weaher by location 
*/
const useWeatherData = (): DataWeatherType | null => {
  const [data, setData] = useState<DataWeatherType | null>(null);
  const [isErrorLocationBlock, setIsLoctionBlock] = useState<boolean>(false);

  const success = async (position: GeolocationPosition) => {
    const promsie = getWeatherData(
      position.coords.latitude,
      position.coords.longitude
    );
    setData(promiseWrapper(promsie));
  };

  const error = (err: GeolocationPositionError) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setIsLoctionBlock(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if (isErrorLocationBlock) {
    throw "turn on gps location";
  }
  return data;
};


export default useWeatherData;
