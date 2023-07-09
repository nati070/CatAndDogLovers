
import httpx
from configuration.env_config import CAT_RANDOM_IMG_API
client = httpx.AsyncClient()

#### Errors #### 
class GetRandomCatException(Exception):
    pass

################ 

async def get_random_cat_image():
    try:
        reponse = await client.get(CAT_RANDOM_IMG_API)
        return reponse.json()
    except Exception:
        raise GetRandomCatException


     

