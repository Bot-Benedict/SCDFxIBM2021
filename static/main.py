from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin
app = Flask(__name__, static_url_path='/static')

app.config['UPLOAD_FOLDER'] = 'C:/Users/Irvin/Documents/MENTOR/SCDFxIBM2021'
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)
	
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(f.filename)
      return 'file uploaded successfully'
		
if __name__ == '__main__':
   app.run(debug = False)
