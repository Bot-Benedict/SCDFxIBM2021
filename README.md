# SCDFxIBM2021
SCDF X IBM Lifesavers' Innovation Challenge: Call For Code 2021

<img height="230" alt="image" src=https://user-images.githubusercontent.com/48685014/121552459-12164100-ca43-11eb-8a34-131bf0e19943.png> 

# Accidentalyzer
#### Presented By Team Memory Leak: Benedict Low, Irvin Ting, Jordan Tan, Koh Swee Sen, Teo Kai Jie
We are a group of third year undergraduate students in computer science from Nanyang Technological University (NTU).

-----
## The Problem
Emergency situations can happen where people may not be around the vicinity, such as in remote areas or during the odd hours of the day like beyond midnight. These situations can be critical as people may be injured or infrastructure can be on fire, and there may not be people in the vicinity that can alert the SCDF and the police in time.

There is a strong urgency to render help in these situations, but it could be after some time when a passer-by manages to chance upon the incident, which by then it could be too late to help the injured individual or to prevent further damages to the building.

Hence, we feel that the time lag in response time must be resolved in such circumstances in order to save lives or prevent further damage to infrastructure.

## The Post-Pandemic Future
As the COVID-19 pandemic rages on around the world, and with new variants coming up that can potentially be more virulent, many countries continue to tackle further transmissions of the virus. In this new normal, it is not uncommon for governments globally to take drastic approaches to curb infections in certain parts of the country from time to time. Some of these approaches include ring fencing infection clusters by imposing quarantine orders to the local community within the clusters, mandating testing for the local residents and even quarantine the close contacts of infected individuals. As these restrictions curb the movements of the local population, there may be a period of time when there are lesser people out in public spaces, which further highlights the importance of emergency response in times when there are fewer people who can alert the SCDF and police in an event of an emergency.

## Our Solution
In order to speed up emergency response in situations where passers-by may not be around the vicinity when the incidents occur, we developed the Accidentalyzer platform, which is a web dashboard application. The Accidentalyzer platform makes use of the cameras installed in public spaces, and use the live footages from these cameras to do video analytics. Through the live footage, we want to use machine learning to detect emergency situations and alert the SCDF more quickly. There are 2 main parts to this platform, namely the machine learning detection and the dashboard to alert the emergency response team.

### Machine Learning Detected Emergency
The platform utilises a trained neural network model to predict and classify the frames captured from public cameras into 4 categories, namely fires, traffic accidents, injured persons and non-emergency situations.

### Dashboard Webapp
Next, we have a web dashboard application that can provide real time updates based on the footage from public cameras to the emergency response personnel. In an event when the model detects an emergency, the results will be reflected through this dashboard to indicate the type of emergency, date and time of the event and as well as the footage taken from the camera which detected the situation.

## Pitch Video
Our [pitch video](https://youtu.be/vx3ixjy15iI) to explain the product.

## Architecture of Solution
We have designed Accidentalyzer with the following architecture with the frontend and backend.
<img height="150" alt="image" src=https://user-images.githubusercontent.com/48685014/121551042-df1f7d80-ca41-11eb-9430-2fa774a082e6.png> 

## Additional Details of Solution
Our detailed solution to the problem can be accessed from [here](https://docs.google.com/document/d/12fKjA-bDnPPvvqrT0bRfAYwgy-JynCU1R4z0ZPEEsbg/edit).

-----
## Getting Started
The following is the step-by-step guide in launching and using the prototype.

### Flask Backend
```
virtualenv flask
cd flask
source bin/activate
pip install flask

// copy the requirements.txt and main.py into the flask directory

pip install -r requirements.txt
python -m flask run
```

### React Frontend
```
cd webapp/my-app
yarn install
yarn start
```

## Solution Prototype
Our prototype has been hosted [here]().

## Technical Stack
We have used the following tools in our technical stack to develop this prototype.
* React
* Tensorflow
* Python Flask
