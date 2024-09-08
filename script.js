// Define the function to generate the resume
function generateResume() {
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var year = parseInt(document.getElementById('year').value, 10);
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var duration = document.getElementById('duration').value;
    // Generate the resume content
    var resumeContent = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n\n        <h3>Education</h3>tdsts\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>University:</strong> ").concat(university, "</p>\n        <p><strong>Year of Graduation:</strong> ").concat(year, "</p>\n\n        <h3>Experience</h3>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Duration:</strong> ").concat(duration, "</p>\n    ");
    // Display the resume content
    document.getElementById('resume-content').innerHTML = resumeContent;
}
// Add event listener for form submission
document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    generateResume();
});
