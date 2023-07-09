from sanic import Blueprint,json,empty
from dals.cats import get_random_cat_image,GetRandomCatException
bp = Blueprint('cats',url_prefix='cats')

@bp.get('/get-random-img')
async def get_random_img(req):
        try:
            cat_data = await get_random_cat_image()
            return json({'cat_img_url': cat_data[0]['url']})
        except GetRandomCatException:
            return empty(409)
        except Exception:
             return empty(500)




