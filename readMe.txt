Created By:
James Fitzgerald and Noah Steinberg

Extra Addition Credit (Part II): We got permission from Professor Nel to use our password encryption and registering page as our bonus feature. Our passwords are hashed, and new users can register on a page. This registration page and login includes bootstrap, which requires internet access to view properly

Setup:
Run mongoDB, pointing to the directory 'data' in the root directory: 
(Ex: mongod --dbpath /Users/jamesfitzgerald/Desktop/comp2406/Assignment4/data)

To run the server(while in the root directory):
$ node server.js
Direct your web browser to localhost:1337

To use the webpage:
	Create an account via the registration page (You will be logged on upon account creation; however, if you already have an account you make simply use the login page)
	Select start 
	Select a question from the list of questions
	After answering a question, hit submit to save the answer
	After answering a question, you can review your answer by visiting the question again, the selected radio button was your saved answer.
	Answers are logged and inserted to the database for the user upon submision of an individual question, simply log off when finished with the test

To view the database (while mongo is running):
mongo
use database
show collections

(from here you may work with the database as you please)
Results are stored in testresponses,
Questions are stored in testquestions, 
User information is stored in users