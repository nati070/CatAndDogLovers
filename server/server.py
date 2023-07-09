from sanic import Sanic 
from routes import cats_bp,dogs_bp,weather_bp
from sanic_ext import Extend

app = Sanic("dog_and_cuts")

# cors configuration
app.config.CORS_ORIGINS = "http://localhost:3000"
app.config.CORS_HEADERS = 'Content-Type'
app.config.CORS_METHODS = ['GET','POST']
Extend(app)

# routes api
app.blueprint(cats_bp)
app.blueprint(dogs_bp)
app.blueprint(weather_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)

#  for develop commend
#  python -m sanic --dev server.app 
