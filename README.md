# loginSYS
 
This repository contains the implementation of a simple, client-side Smart Login System using HTML, CSS (Bootstrap), and JavaScript. The system allows users to sign up, log in, and be welcomed on a home page.

Features
Sign Up: Users can create a new account by providing their name, email, and password.
Log In: Existing users can log in using their email and password.
Home Page: A personalized welcome message is displayed after successful login.
Session Management: User sessions are managed using localStorage to store user data and session information.
Form Validation: Basic validation to ensure that all input fields are filled and the email does not already exist in the system.
Error Handling: Displays appropriate error messages for empty fields, existing emails during signup, and incorrect login credentials.
Technologies Used
HTML5: Structure of the web pages.
CSS3 (Bootstrap): Styling and responsive design.
JavaScript: Functionality and form validation.
localStorage: Storing user data and session management.
File Structure
index.html: The login page.
signup.html: The signup page.
home.html: The home page displayed after login.
css/: Directory containing CSS files (Bootstrap and custom styles).
bootstrap.min.css
style.css
js/: Directory containing JavaScript files.
popper.min.js
bootstrap.min.js
main.js: Contains the core functionality for login, signup, and session management.
auth.js: Handles authentication checks for accessing the home page.

Setup and Usage
Clone the repository:
sh
Copy code
git clone https://github.com/your-username/smart-login-system.git
Navigate to the project directory:
sh
Copy code
cd smart-login-system
Open index.html in a web browser to start the application.
Screenshots
Login Page:

Signup Page:

Home Page:

License
This project is licensed under the MIT License. See the LICENSE file for details.
