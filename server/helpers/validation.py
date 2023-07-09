from jsonschema import validate
from sanic import json
from functools import wraps

def validation_required(json_schema):
    def wrapper(f):
        @wraps(f)
        def decorated(req,*args,**kwargs):
            json_req = req.json
            try:
                validate(instance=json_req,schema=json_schema)
                return f(req,*args,**kwargs)
            except Exception:
                return json({"msg" : "wrong schema"},400)
        return decorated
    return wrapper