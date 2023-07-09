
import httpx
from configuration.env_config import DOG_RAMDOM_IMG_API
client = httpx.AsyncClient()

#### Errors #### 
class GetRandomDogException(Exception):
    pass

################ 

async def get_random_dog_image():
    try:
        reponse = await client.get(DOG_RAMDOM_IMG_API)
        return reponse.json()
    except Exception:
        raise GetRandomDogException


     

