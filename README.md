# foodiefun-backend
Foodiefun Backend

***

URL: https://foodiefun-buildweek.herokuapp.com/

***

###### Current Users

	"username": "John",
	"password": "lambdaisnice",
	"email": "Johndoe@lambda.com",
	"city": "Chicago"

***

## The following endpoints are available for **USER ROUTER**.

* POST /api/register 
> {username, password, email, city} are required. 
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

