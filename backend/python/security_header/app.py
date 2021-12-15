from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
import shcheck
app = Flask(__name__)

@app.route('/', methods=["POST"])
@cross_origin(supports_credentials=True)
def index():    
    input_json = request.get_json(force=True)
    url=[]
    url.append(input_json['URL'])
    result=shcheck.main(url)
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=8000)