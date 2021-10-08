# Budget-Bois

[Goal]
The goal of this website is to allow for a convient central hub to manage all the
financial aspects of your life. It is unopinonated on how a user tracks or manages their spending
and simply allows them to categorize and group together types of spending in a way that makes sense to
them. There are many other budget management websites out there such as Mint by Intuit that cover more
features than this project. However, this project aims to simplify the user expierence by having intuitive 
UI and flexibiliy to customize and group expense categories to how it makes sense to the user.

Following an initial and prototype state the goal is to move on to integrating more (useful) features
and integrate retrieving data from real institutions to give the user accurate numbers to the penny.

[Current Status]
This is an ongoing project to demonstrate full stack development, using React with professional
Material-UI stylings, to middleware routing and API interactions with Express, to full
relational database management with PostgreSQL running on a Node.js server.

The site initially will utilize client side rendering as default by React routing, however it also uses
Express to handle API endpoints for data fetching and database interactions. The plan is to eventually
switch to dynamic rendering once more of the project is flushed out.

[Directory]
This repository is mainly split into two seperate folders the "budget-server" folder for server side code 
and "budget-web" for front end code. Later in production the server side code and client side code will 
most likely be split to two seperate hosting servers for easier continous integration between the back-end 
and front-end.

Under the budget-server/src folder you will find simple express api endpoints in index.js as well as 
postgres config and a generic query function that can be passed any query.

Under the budget-web/src folder you will find all React code including Contexts and Components subfolders for 
Auth/other contexts (in Contexts) and individual components or pages (within Components).

Under the database folder at the root of this repository you will find planned or testing SQL schemas and 
queries. This folder may contain sample user data later for testing performance and results from more 
complex queries.

[Technologies in Use]
React (frontend)
Node (back-end server)
Express (routing/api interactions)
PostgreSQL (relational database)
Google Firebase (user email and password storage / authentication service)
