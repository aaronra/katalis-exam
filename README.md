# katalis-exam

# Note
-Use of any external library, and dependencies must be highlighted in README

# Language
- React (Frontend Framework)
- jQuery, AJAX (if applicable)
- HTML, CSS, JS (Frontend)
- NodeJS (Backend)
- Database of your choice

# Task 1 - Build a Countdown timer
**Requirement:**

URL path > localhost:3000/

  Client is expecting a campaign website showing a countdown timer
  Assessment criteria
- Front-end - developed using one of the frameworks listed above
- Back-end - developed using NodeJS
- Countdown animation (of your choice)
- Backend with ability for user to change time
- Timer show 00:00:00 after expire
- Login/Register is not necessary


# Task 2 - Crawl data directly from a website 
**Requirement:**

URL path > localhost:3000/ico-list

  Client is expecting the website to show the latest ICO listing
  From the website, crawl data, store in database and display data (using database) 
  Resource: ​ https://topicolist.com/ongoing-icos/
  Assessment criteria
- A table showing all data on the specified page
- Auto-refresh data is expected, every 5 minutes
- Icons/Images should be fetched directly from website (direct image link)
- Date format should be in this format - 31 October, 2018
- Logic to handle duplicate data.

# Meteor packages
  1. fourseven:scss
  2. twbs:bootstrap
  3. percolate:migrations
  4. mikowals:batch-insert

# NPM packages
  1. momentjs
  2. react-countdown-now
  3. react-detect-offline
  4. x-ray
  5. crawler
  
**Setting Up:** How to setup and run the app
 run this command
 > ```bash
 >  npm install && meteor
 > ```
 
 **NOTE:** app running on localhost:3000
