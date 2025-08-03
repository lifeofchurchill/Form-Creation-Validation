📋 User Registration Form with Validation
This is a simple web-based user registration form that includes client-side validation using vanilla JavaScript. Users must enter a valid username, email, and password before successfully registering.

🚀 Features
✨ Real-time validation on form submission

🔒 Ensures password is strong enough

📧 Validates email format

📛 Friendly feedback messages

💡 Responsive and accessible UI design

📁 File Structure
bash
Copy
Edit
project/
│
├── index.html             # Main HTML file
├── style.css              # CSS styling for the form
├── script.js              # JavaScript validation logic
└── README.md              # Project documentation
✅ Validation Rules
Field	Requirement
Username	Must be at least 3 characters long
Email	Must include "@" and "."
Password	Must be at least 8 characters long

🔄 How It Works
All validation is performed client-side.

Upon form submission:

If all fields are valid → ✅ Success message is shown.

If any validation fails → ❌ Error messages are displayed.

Feedback is displayed in a colored box below the form.

🧪 How to Use
Clone or download the repository.

Open index.html in your browser.

Fill out the form and click Register.

Observe validation messages and fix errors if any.

💡 Example Screenshots
✅ Successful Registration:

nginx
Copy
Edit
Registration successful!
❌ Validation Errors:

cpp
Copy
Edit
Username must be at least 3 characters long.
Please enter a valid email address.
Password must be at least 8 characters long.
🛠️ Tech Stack
HTML5

CSS3

JavaScript (Vanilla)

📚 Credits
Created as part of a learning exercise in form validation and DOM manipulation using JavaScript.

