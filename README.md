# CO2 Project using React, Nodejs and sql


This is a sample project made in React, and Node js and mysql. The frontend in react is stored in frontend folder and backend in nodejs and express is stored in backend folder.

# How to implement the project


- First of all copy the http link and go to your folder and type:  `git clone 'link'` and press enter.

- Once the directory is cloned , go to terminal and install all required dependencies using the command `npm install`.

- Now one of the pre requisite is you must have mysql installed. So, go to mysql and run following queries:

- `CREATE DATABASE airdata;`
- `USE airdata;`

- `CREATE TABLE co_amount(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
status VARCHAR(30),
amount int
);`

- Now go to backend folder and then index.js file abd replace line 15-20 with your localhost, username, and password for mysql.

- We are almost done. Now open two terminals in one terminal go to frontend folder and type `npm start`

- In other terminal go to backend folder and type `npm start`

- Thats it reload the chart js and you will see new barcharts every 10 seconds once you reload. 

- The bar chart consist of x axis as label where status is shown. For example, if the status of a bar chart is red, that means co2 amount is greater than 2000, green 
less than 1000 and yellow means between 1000 and 2000.

- For e.g. co2 amount with status yellow in bar chart its color is yellow. To know exact amount hover to the barchart and it shows real number.

![sample_bar](https://user-images.githubusercontent.com/73000507/152933586-efe918de-c569-4808-9d2f-5373dc76ad08.png)



## Functionalities
- Since, I could not find an API where CO2 data is pushed every 10 seconds, so I made my own data. I called a function that randomely generates an integer and pushes into database   every 10 second and then data is extracted in react and then graph is plotted using chart js in react.
- Moreover, I also implemented Weather api using axios where you can enter a city in Germany and it fetches all weather related data of that particular city and then displays      under Weather tab
- Lastly, I implemented footer where all important links and mailing functionality is shown.
- Used bootstrap for CSS 
- The basic interface looks something like this but CO2 graph is not shown since we still havent connected with mysql backend in this website:
- https://breeze-react.netlify.app/ 
