import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = False


@app.route('/api/imageprocessing', methods=['GET'])
def api_id():
    if 'url' in request.args:
        url = str(request.args['url'])
    else:
        return "Error: No image path provided."
    if 'cameraid' in request.args:
        cameraid = int(request.args['cameraid'])
    #call function, take in image path and return event type
    return {
        "cameraId": cameraid,
        "eventType": url,
    }

app.run()