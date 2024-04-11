# Password-Reset (Backend)

## Packages:

* dotenv 
* express
* mongodb
* nodemon
* nodemailer

## Features:
* / - to get all the data's of the all the users
* /signup - to signup a user
* /login - to login a user
* /reset - to sent a reset link
* /reset/link/:string - to change the password

## Steps:

### /
* Gets all the data from the database by a function-getAllData

### /signup
* Checks user that if the email is already registered or not by a function-checkUser(email)
* Then adds a key named string and value as empty in the object
* Finally puts the object in the database by a function-addUser(object)

### /login
* Checks user with email and password by function-loginUser(email,password)
* If both email and password matches it will login
* Otherwise it will show error as invalid password or email

### /reset
* Checks if the email is valid or not by a function-checkingUser(email)
* If the email is not valid it will show error as email is not valid, if not it will proceed
* Creating a random string and storing it in the specific user database by a function-addString(userid,string)
* Composing a mail by sender as the admin and receiver as the specific user email address
* Sending email using transporter created by nodemailer
* Mail sent with password reset link as the navigation to the reset form page
* Link will be sent with generated string as params for verification process

### /reset/link/:string
* Finds the user with the string and compares it by a function-findingUser(string)
* If it matches it will proceed otherwise it will show error as link expired
* Then the given new password will be replaced in the specific user by a function-resettingPassword(id,password)
* The stored generated random string will be deleted after resetting password by a function-deletingString(id)
* That's it, the password is changed successfully
* Now user can login with the new password...


