import httpx
from configuration.env_config import WEATHER_API,API_KEY_WEATHER
client = httpx.AsyncClient()



#### Errors #### 
class WeatherDataExeption(Exception):
    pass

################ 

async def get_weather_data(lat,lng):
    try:
        reponse = await client.get(f"{WEATHER_API}{API_KEY_WEATHER}&q={lat},{lng}&aqi=no")
        return reponse.json()
    except Exception:
        raise WeatherDataExeption

     

