from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin
import os
from random import randrange
from PIL import Image
import numpy as np
import glob
import tensorflow as tf

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = './static/'
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

CNNmodel = tf.keras.models.load_model('JordanModel1')

@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)
	
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(os.path.join(app.config['UPLOAD_FOLDER'],f.filename))
      randomNumber = randrange(16);
      predictionResult = predict(os.path.join(app.config['UPLOAD_FOLDER'],f.filename))
      if (predictionResult == 'Normal'):
         return 'none'  # return 'none'; // if nothing happens please return this exact string
      else:
         return predictionResult 


def predict(directory):
    imageArray=np.array([np.array(Image.open(directory).resize((495,426)))])
    prediction=CNNmodel.predict(imageArray)
    score = tf.nn.softmax(prediction[0])
    predictedCat=['Fire','Traffic','Injury','Normal'][np.argmax(score)]
    return predictedCat
    
		
if __name__ == '__main__':
   app.run(debug = False)


