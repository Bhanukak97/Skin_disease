from flask import Flask, jsonify, request
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
import numpy as np
from tensorflow.keras.models import Model
from tensorflow import keras
from io import BytesIO
from PIL import Image

app = Flask(__name__)

# Define the model architecture
mg_height,img_width=180,180
batch_size=32
resnet_model = keras.Sequential()
pretrained_model= keras.applications.ResNet50(include_top=False,
                   input_shape=(180,180,3),
                   pooling='avg',classes=3,
                   weights='imagenet')

for layer in pretrained_model.layers:
    layer.trainable=False

resnet_model.add(pretrained_model)
resnet_model.add(keras.layers.Flatten())
resnet_model.add(keras.layers.Dense(512, activation='relu'))
resnet_model.add(keras.layers.Dense(3, activation='softmax'))

# Load the saved weights
weights_path = './resnet50_weights.h5'
resnet_model.load_weights(weights_path)

@app.route('/home')
def main():
    return{'name':"hi welcome"}

# Define the prediction route
@app.route('/predict', methods=['POST'])
def predict():
    # Load the image
    img_file = request.files['image']
    img_bytes = img_file.read()  # Read the file contents as bytes
    img = Image.open(BytesIO(img_bytes)).resize((mg_height, img_width))
    img_array = np.array(img)
    img_array = preprocess_input(img_array)
    img_array = img_array.reshape((1, mg_height, img_width, 3))  # Add batch dimension
    
    # Make the prediction
    prediction = resnet_model.predict(img_array)
    predicted_class = np.argmax(prediction)
    class_names = ['Acne', 'Normal', 'Varicella']  # Replace with actual class names
    predicted_class_name = class_names[predicted_class]
    
    # Return the prediction result
    return predicted_class_name

if __name__ == "__main__":
    app.run(debug=True,host="192.168.2.12",port=5000)