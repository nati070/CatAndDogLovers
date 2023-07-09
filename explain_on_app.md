# Dog Lovers Chrome Extension
## Getting started
first, we need to instal the extension and  turn on the server that returns data to the extension.
to turn on the server just enter the server file and from the CLI we enter the following commands:
*  create virtaul enivroment: python -m venv env
* enter to the venv by runing env/Scripts/activate (on windos) /env/biv/activate(on mac/unix)
* install dependencies:  py -m pip install -r requirements.txt
* turn on the sever: sanic server

to turn on the client extension;
* go the chorme extension tab and load the extension file name extension
* open a new tab 
* 
now the extension works :-).
 
# About the Code
## server
the server code it's pretty simple, 
the server get random img's of cats and dog and also get the weather data and return to the client. 

dals folder - get the data from the api's(weather data, dog Img,cat img) 
routes - send the data to client 
helpers - i created decorator to validate every request that insert to server and validate that json schama.

## Client

### components: 
NavBar - the bar on the to of the page, the user select is search type on Google or Select  Car\Dog image.
Upload - the upload window with drag and drop
Search - the search input for google search.
BtnUploadImg\BtnNextImg - buttons that get next Image from server or upload  an image from user device.
ErrorBoundery - use for wrap the weather comp and background comp to check if there is any error to recive the data.
promiseWrapper - help for Suspen,and ErrorBoudary  to check if the comp loading or error.

## Hooks

  useBackgrpundSrc - the background comp use it for choose from where to get background image. from Cookie(server img) or from localstorage(device img).
  
 useWeatherDate - hook that provide the data of weather to the Weather comp.

 ## Reducers
 
 bgImgReducer - when use change img with next button or upload we save the img src
and proivde it to the background.

searchRedcer - when user click on nav bar option searcn it provide the search comp what to search(img,web,videos)

uploadReducer - tell the Upload comp if display or not(css)
 

##  Utils
function that we use 
