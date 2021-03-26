# Using fetch to retrieve data from servers

Comunication with REST API services is essential in both front end and back end development. We'll have also to deal with **asynchronous** execution code.

## Previous work

Get familiar with the REST API Github. 
Learn [how to retrieve information](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api) about a user.

## Steps

1. Execute and explore the **fetch_example** folder
2. Implement the main exercise in both **index.html** and **fetch.js** files
3. The user should be able to write a Github username in the input field
   1. The form should validate that the input field value is not empty and only contains characters or numbers
   2. When the user clicks in "Search" button, an AJAX call should be performed to the GitHub API to retrieve information about the filled username
   3. A new row should be added in the table to display the avatar, bio, and the homepage of the given user.


## BONUS

1. If the user does not exists in the GitHub database, an error message should be dislayed in the application; and no row should be added in the table.
2. If the username has an **invalid** Github username format, a different error should be display; and the application should immediatly terminate.

