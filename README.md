# foodiefun-backend
Foodiefun Backend

***

URL: https://foodiefun-buildweek.herokuapp.com/

***

###### Current Users

	"username": "Billy",
	"password": "lambdaisnice",
	"email": "BillyBob@lambda.com",
	"city": "Orlando"

	"username": "Johnny",
	"password": "lambdaisnice",
	"email": "Johndoeb@lambda.com",
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

### The following endpoints are available for **RESTAURANTS ROUTER**.

* POST /api/restaurants
> {name, hours, address} are required. 
> Return = Nothing 

* GET /api/restaurants
> Token is required. 
> Return = All restaurants

* GET /api/restaurants/:id
> Token is required. 
> Return = Specific restaurants

* PUT /api/restaurants/:id
> Token is required. 

* DELETE /api/restaurants/:id
> Token is required. 

***

### The following endpoints are available for **CUISINE VALUE ROUTER**.

* POST /api/cuisine 
> {name} are required. 
> Return = Nothing 

* GET /api/cuisine 
> Token is required. 
> Return = All cuisine values

* GET /api/cuisine/:id
> Token is required. 
> Return = Specific cuisine value

* PUT /api/cuisine/:id
> {name} are required. 
> Token is required. 

* DELETE /api/cuisine/:id
> Token is required. 

***

### The following endpoints are available for **CUISINE TYPE ROUTER**.

* POST /api/cuisinetype/
> {cuisine_value_id, restaurant_id} are required. 
> Return = Nothing 

* GET /api/cuisinetype/
> Token is required. 
> Return = All cuisine types

* GET /api/cuisinetype/:id
> Token is required. 
> Return = Specific cuisine type

* PUT /api/cuisinetype/:id
> {cuisine_value_id, restaurant_id} are required. 
> Token is required. 

* DELETE /api/cuisinetype/:id
> Token is required. 

***