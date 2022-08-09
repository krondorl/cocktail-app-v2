# Node.js / React Test Exercise
## Overview

The application must

* Build and start without errors
* Log basic information to the console on the backend
* Be accessible and usable
* Cover the compulsory feature set
* Be committed frequently, with descriptive commit messages, so we understand the development process

It’s good if the application

* Has a coherent code style
* Has readable, commented, and easy to understand code
* Looks and feels somewhat aesthetic

In this test exercise you need to build a simple web application using NodeJS and Express on the
server side, and React on the frontend side. Your application will display information about cocktails from the free API, theCocktailDb.

The finished project should be uploaded to a repository on GitHub, GitLab or BitBucket, and the
repo link sent to us. Please include a very brief guide in the README for building, starting and accessing your application.

The whole exercise should not take more than 3-6 hours to complete.

## FEATURES

### Compulsory features

These features should be implemented in your application, and should be able to run without error.
If you cannot finish with everything, that’s no problem, it’s better to have some of the features
tested and working, than to have all of them, but incomplete.

* The backend should get the data for every request from theCocktailDb. API links can be found here: https://www.thecocktaildb.com/api.php
* Have a page initially display a random cocktail. Backend endpoint to access data: api/cocktail, frontend endpoint: /cocktail
* Have a button to display another random cocktail, and a button to search a cocktail by name (passed to the backend as a query parameter)
* The cocktail page should contain the following information:
    * The name of the drink
    * The list of ingredients and the required measurements
    * The instructions to prepare the cocktail, in English
    * The picture thumbnail of the cocktail
* The frontend should only display information, all data processing and the data grab should happen on the
backend side
* The frontend and the backend should communicate via the above-mentioned API endpoints

### Optional features

If you have some spare time on your hands, or don’t mind some extra practice, you may also
implement one or more of the following features.

* Simple caching, so the backend doesn’t have to execute the data grab and the processing for every request (you
don’t have to cache the pictures)
* Have a checkbox to exclude alcoholic cocktails
* Display the picture of the ingredients too

Good work, and good luck! :)
