# foodiefun-backend
Foodiefun Backend

***

URL: https://foodiefun-buildweek.herokuapp.com/

***

## The following endpoints are available for **USER ROUTER**.

* POST /api/register 
> {username, password, email} are required. 
> Return = Nothing 

* POST /api/login 
> {username, password} are required. 
> Return = ID, username, and token. 

* GET /api/users 
> Token is required. 
> Return = All users

* GET /api/users/:id
> Token is required. 
> Return = Specific User

* PUT /api/users/:id
> Token is required. 


* DELETE /api/users/:id
> Token is required. 

***

