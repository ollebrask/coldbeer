# Testing

## CSS

All files has been checked and gave no errors.
Also ran the deployed url through the validator.

![CSS](/documentation/css_validation.png)

## JSHint

Due to lack of time for deadline. I didn't have time to learn how to use ESlint for validation.

[JShint](https://jshint.com/) - I tested all .js files in jshint. 

I got these warnings repeatedly because of that JSHint doesn't cover ESversions 6+:

* 'Optional chaining' is only available in ES11 (use 'esversion: 11').
* 'async functions' is only available in ES8 (use 'esversion: 8').
* 'object spread property' is only available in ES9 (use 'esversion: 9').

## Lighthouse

![Lighthouse](/documentation/lighthouse.png)

Lighthouse testing has been performed on all pages. No significants dropdowns except the homepage. Large images due to uploads.
Best practices is something i need to review for future improvements, because lack of time for deadline.

## Manual Testing

| # | Feature | Expected Outcome | Testing Performed | Pass/Fail |
| :---: | :--- | :---: | :---: | :---: |
| | Navbar (All users) | | | |
| 1 | Navbar - Home | Redirect to home page | click button | ✅ |
| 2 | Navbar - Logo | Redirect to home page | click button | ✅ |
| | Navbar (Logged out user) | | | |
| 3 | Navbar - Log in | Redirect to sign in page | click button | ✅ |
| 4 | Navbar - Sign up | Redirect to sign up page | click button | ✅ |
| | Navbar (Logged in user) | | | |
| 5 | Navbar - Liked | Redirect to liked posts page | click button | ✅ |
| 6 | Navbar - Sign out | Sign out and redirect to home page | click button | ✅ |
| 7 | Navbar - Add post | Redirect to create post form page | click button | ✅ |
| | Sign up Page | | | |
| 8 | All fields filled correctly | Create account and redirect to sign in page | click Sign up button | ✅ |
| 9 | Leave blank username field | Display error: This field may not be blank. | click Sign up button | ✅ |
| 10 | Leave blank password field | Display error: This field may not be blank. | click Sign up button | ✅ |
| 11 | Leave empty confirm password field | Display error: This field may not be blank. | click Sign up button | ✅ |
| 12 | Set different confirm password | Display error: The two password fields didn't match. | click Sign up button | ✅ |
| 13 | Give username that already exists | Display error: A user with that username already exists. | click Sign up button | ✅ |
| | Sign in Page | | | |
| 14 | All fields filled | Sign in and redirect to previous page | click Sign in button | ✅ |
| 15 | Leave blank username field | Display error: Must include "username" and "password". | click Sign in button | ✅ |
| 16 | Leave blank password field | Display error: This field may not be blank. | click Sign in button | ✅ |
| 17 | Try username with first letter capital/all letters capital | Display error: Unable to log in with provided credentials. | click Sign in button | ✅ |
| | Posts Page | | | |
| 18 | Infinite scroll | Scroll down and populate more posts | Scrolled down | ✅ |
| 19 | Click on image | Redirect to post page | click on image | ✅ |
| | Post Page (logged out)| | | |
| 20 | Comment | Can't create a comment | Create a comment | ✅ |
| | Post Page (logged in) | | | |
| 21 | Like button | Like post and update like count | click button | ✅ |
| 22 | Unlike button | Unlike post and update like count | click button | ✅ |
| 23 | Comment | Comment post and update comment count | Add comment | ✅ |
| | Post Page (logged in owner) | | | |
| 24 | Display dropdown menu | Display edit and delete icons | click caret down button | ✅ |
| 25 | Dropdown menu edit icon | Redirect to edit post page | click edit icon | ✅ |
| 26 | Dropdown menu delete icon | Delete post and redirect to homepage | click delete icon | ✅ |
| 27 | Dropdown menu edit comment | Comment is edited | click edit icon | ✅ |
| 28 | Dropdown menu delete comment | Comment is deleted | click delete icon | ✅ |
| | Contact Form | | | |
| 29 | Contact form success | Display success message, clear form fields | complete all fields and send | ✅ |
| 30 | Input field empty | Display error message | name left blank | ✅ |
| 31 | Input field empty | Display error message | email left blank | ✅ |
| 32 | Input field empty | Display error message | subject left blank | ✅ |
| 33 | Input field empty | Display error message | message left blank | ✅ |
| | Likes | | | |
| 34 | Like a post | Increase like count | click like button | ✅ |
| 35 | Unlike a post | Decrease like count | click unlike button | ✅ |
| 36 | When not logged in | Display log in message | hover like button | ✅ |
| | Tags | | | |
| 37 | Tags on post creation | Add tags to a post | add tags, create post | ✅ |
| 38 | Tags on post edit | Edit tags of a post | edit tags, save post | ✅ |
| | Not found 404 | | | |
| 39 | 404 not found page | Load 404 page | tried various urls that don't exist | ✅ |
| | Add tags (Admin api) | | | |
| 40 | Add tag from admin panel | Tag is added | Added tags from admin panel | ✅ |


## Bugs

### Solved Bugs

During the development I solved a lot of bugs by reading the information in the terminal when running "npm start". 

---

BUG : When I tried to login as a user from the frontend, it didn't work. I didn't get the correct response from the API:

![Bug](/documentation/bug_1.png)

SOLUTION: 
* I had the wrong version of dj-rest-auth and allauth installed. I installed the versions from the walkthrough.
* I also had to remove all migrations file and create a new database, makemigrations and migrate.
  
---

BUG: When I tried to upload a photo to a new post from my frontend I got error: POST 500 (Internal Server Error).

SOLUTION: Found solution on slack: In my requirements.txt in the backend I didn't have urllib anymore. After running:
pip3 install urllib3==1.26.15
pip3 freeze > requirements.txt
When I redeployed it worked.

---

### Unsolved bugs

None

