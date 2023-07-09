from sanic import Blueprint,json,empty
from dals.dogs import get_random_dog_image,GetRandomDogException

bp = Blueprint('dogs',url_prefix='dogs')

@bp.get('/get-random-img')
async def get_random_img(req):
    try:
        dog_data = await get_random_dog_image()
        return json({"dog_img_url": dog_data['message']})
    except GetRandomDogException:
        return empty(409)
    except Exception:
        return empty(500)



