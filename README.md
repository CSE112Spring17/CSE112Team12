# CSE112Team12

## Onboarding
### Setup

```bash
git clone https://github.com/CSE112Spring17/CSE112Team12.git
cd CSE112Team12
npm install
```

### Viewing Application

* Running `npm start` will have your application listen on localhost:8080

### Development Flow

* Checkout `Dev` Branch

```
git checkout Dev
git pull
```
* Branch off of Dev

```
git checkout -b <branch_name>
```
* Develop on that branch
* Thoroughly test your new code
* Push up code to your branch

```
git add .
git commit -m "<some_message>"
git push
``` 
* Create a pull Request
	* From the Project Github Page
![alt text](http://i.imgur.com/eNYkKVQ.png "Pull Request Button")
	* Make sure you are merging your branch into Dev
![alt text](http://i.imgur.com/NB0FQuZ.png "Pull Request Button")
	* Once Integration Tests to pass on codeship and a thumbs up is received from another team member in the commments merge your branch into Dev and Delete your branch (Github provides all this functionality from the pull request page)

### Testing Flow

#### Writing Tests
* Add tests to CSE112Team12/test/test.js
* Will soon refractor to allow for encapsulated testing

#### Running Tests
* `npm test`

### Deployment Flow

* Using `Google Compute Engine` with `ngninx`
* Dev Host: `104.199.112.182`
* Production Host: `35.185.212.97`
* On Fridays we will deploy the Dev Branch to the Dev Host (might change to automatic deployment)
* On Saturdays we will Merge the Dev Branch into Master and deploy to production Host
* When we push to the Dev branch, if all tests are passing, it will be deployed to the Dev server.

### Tips

* When developing locally running `npm run bundle` in one terminal and `npm run dev` will allow your changes to show up on localhost:3000 as you develop

### Usage 

#### IsValidPhoneNumber()
This function checks if the input value is a correctly entered phone number.
The user will input a string, if it is a valid phone number, it will return "The phone number is valid". If not, it will return "The phone number is invalid".

#### SetFormat()
The user can set the accepting phone format by inputting an example. The format will be used for IsValidPhoneNumber().
