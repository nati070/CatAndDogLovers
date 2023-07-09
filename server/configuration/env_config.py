from decouple import config
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAT_RANDOM_IMG_API  =   config('CAT_RANDOM_IMG_API')
DOG_RAMDOM_IMG_API  =   config('DOG_RAMDOM_IMG_API')
API_KEY_WEATHER     =   config('API_KEY_WEATHER')
WEATHER_API         =   config('WEATHER_API')