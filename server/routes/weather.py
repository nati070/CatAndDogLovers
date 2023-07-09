from sanic import Blueprint,json,empty
from helpers.validation import validation_required

from dals.weather import get_weather_data, WeatherDataExeption

bp = Blueprint('weather',url_prefix='weather')

weather_schema = {
    "type": "object",
    "properties": {
        "lat": {"type": "number"},
        "lng": {"type": "number"},
    },
    "required": ["lat","lng"],
    "additionalProperties": False
}
@bp.route('/',methods=['POST'])
@validation_required(weather_schema)
async def weather_data(req):
    try:
        reqJson = req.json  
        data = await get_weather_data(reqJson['lat'],reqJson['lng'])
        return json({'location' : data['location']['name'] , 'temp_f': data['current']['temp_f'],'icon': data['current']['condition']['icon']})
    except WeatherDataExeption:
        return empty(409)
    except Exception:
        return empty(500)
   




