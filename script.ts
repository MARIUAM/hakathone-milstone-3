// Define the function to generate the resume
function generateResume(): void {
    // Collect input values
    const name: string = (<HTMLInputElement>document.getElementById('name')).value;
    const email: string = (<HTMLInputElement>document.getElementById('email')).value;
    const phone: string = (<HTMLInputElement>document.getElementById('phone')).value;
    const address: string = (<HTMLInputElement>document.getElementById('address')).value;

    const degree: string = (<HTMLInputElement>document.getElementById('degree')).value;
    const university: string = (<HTMLInputElement>document.getElementById('university')).value;
    const year: number = parseInt((<HTMLInputElement>document.getElementById('year')).value, 10);

    const jobTitle: string = (<HTMLInputElement>document.getElementById('job-title')).value;
    const company: string = (<HTMLInputElement>document.getElementById('company')).value;
    const duration: string = (<HTMLInputElement>document.getElementById('duration')).value;

    // Generate the resume content
    const resumeContent: string = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>tdsts
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Year of Graduation:</strong> ${year}</p>

        <h3>Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Duration:</strong> ${duration}</p>
    `;

    // Display the resume content
    document.getElementById('resume-content')!.innerHTML = resumeContent;
}

// Add event listener for form submission
document.getElementById('resume-form')!.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    generateResume();
});
