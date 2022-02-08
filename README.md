
This is a sample project made in React, and Node js and mysql. The frontend in react is stored in frontend folder and backend in nodejs and express is stored in backend folder.

#How to implement the project

-First of all copy the hhtp link and go to your folder and type:  `git clone 'link'` and press enter.

-Once the directory is cloned , go to terminal and install all required dependencies using the command `npm install`.
-Now one of the pre requisite is you must have mysql installed. So, go to mysql and run following queries.
-

##Functionalities
- Since, I could not find an API where CO2 data is pushed every 10 seconds, so I made my own data. I called a function that randomely generates an integer and pushes into database   every 10 second and then data is extracted in react and then graph is plotted using chart js in react.
- Moreover, I also implemented Weather api using axios where you can enter a city in Germany and it fetches all weather related data of that particular city and then displays      under Weather tab
- Lastly, I implemented footer where all important links and mailing functionality is shown.
- Used bootstrap for CSS 
- The basic interface looks something like this but CO2 graph is not shown since we still havent connected with mysql backend in this website:
- https://breeze-react.netlify.app/ 
