const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Handle form submission
app.post("/generateSOP", (req, res) => {
    // Retrieve user data from the request body
    const { name, email } = req.body;

    // Generate SOP based on the user's data (implement this logic)
    const sopText = generateSOP(name, email);

    // Send the SOP to the user's email
    sendEmail(email, sopText);

    // Respond with a success message
    res.json({ message: "SOP has been generated and sent to your email." });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Implement the generateSOP and sendEmail functions
function generateSOP(name, email) {
    // Implement SOP generation logic here
    // You can use templates or algorithms to generate SOPs

    // Return the generated SOP text
    return "Your Statement of Purpose goes here.";
}

function sendEmail(toEmail, sopText) {
    // Implement email sending logic here using nodemailer
}
