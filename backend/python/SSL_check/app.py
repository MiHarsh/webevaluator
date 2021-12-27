from flask import Flask,jsonify,request
#from flask_cors import CORS, cross_origin
from sslscan import SSLChecker
app = Flask(__name__)

@app.route('/', methods=["POST"])
#@cross_origin(supports_credentials=True)
def index():
    input_json = request.get_json(force=True)
    url=input_json['URL']
    args = {'hosts': [url]}
    result=SSLChecker().show_result(SSLChecker().get_args(json_args=args))
    return result

if __name__ == '__main__':
    app.run(port=9000)