from PIL import Image
import numpy as np
import glob
import tensorflow as tf
from keras.models import load_model

CNNmodel = load_model('JordanModel1')

def predict(directory):
    imageArray=np.array([np.array(Image.open(directory).resize((495,426)))])
    prediction=CNNmodel.predict(imageArray)
    score = tf.nn.softmax(prediction[0])
    predictedCat=['Fire','Traffic','Injury','Normal'][np.argmax(score)]
    return predictedCat