from flask import Flask,jsonify,request
import shcheck
app = Flask(__name__)

@app.route('/', methods=["POST"])
def index():    
    input_json = request.get_json(force=True)
    url=[]
    url.append(input_json['URL'])
    result=shcheck.main(url)
    return jsonify(result)