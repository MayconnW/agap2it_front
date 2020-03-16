# AGAP2IT Front

This awesome Frontend was built with React. 

## Short Presentation
 This WebSite was made 100% based on agap2-it.pt. This is just a lit bit about what it can be. I had just two days to made it, so I had to choose some parts of the original site to reproduce. And this is the result. 
To be honest, my biggest challenge was the map. To put all those points in place and customize that animation, that was hard. But I'm proud of the work. 

## Dependencies

So let's start

Please first, make sure you have the NodeJs installed in your pc and I recommend you to install the "yarn" too. You can use "npm" instead and will work, but still, I recommend "yarn".
Make sure you have the backend of this website running.

NodeJs -> https://github.com/nvm-sh/nvm#installing-and-updating
Yarn -> https://classic.yarnpkg.com/en/docs/install
Backend -> https://github.com/MayconnW/agap2it_back


## Installation

After you make sure you have NodeJs on your computer: 
1 - git clone "https://github.com/MayconnW/agap2it_front.git";

2 - Copy the "env.example" file as ".env". At the moment there are just two environment variables:  
  - NODE_ENV -> This one is to say if you are running the app in a development or production mode. If you are not sure, just let it "development".
  - REACT_APP_API_HOST -> This one is really important, so pay double attention here. First, make sure you have the backend server running, there is a link of it right above. After just put the backend address here as the example inside the file.

3 - Then open the terminal inside the directory and run the command "yarn". This will install all the dependencies.

4 - Inside the directory yet, now run the command "yarn start". This will play the server in the 3000 port.

5 - Open your favorite browser and go to "http://localhost:3000" and have fun. :)

## Demo

You can see the website running here.

This Website is deployed on Heroku. So when you access the page first time, maybe the server will be sleeping, and it can take some seconds to wake up. 


## Future
Soon I'll create a docker image with this server. 

