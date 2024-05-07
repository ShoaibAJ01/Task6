// Simulated data
const jobs = [
    {
        id: 1,
        title: "Software Developer",
        salary: 100000,
        description: "We are looking for a skilled software developer.",
        experience: "2+ years",
        incentive: 20000,
        recruiter: "Recruiter A"
    },
    {
        id: 2,
        title: "Marketing Manager",
        salary: 80000,
        description: "We need an experienced marketing manager.",
        experience: "5+ years",
        incentive: 15000,
        recruiter: "Recruiter B"
    }
];

// Function to display jobs
function displayJobs() {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = '';
    jobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = `${job.title} - ${job.salary} PKR`;
        li.addEventListener('click', () => showJobDetails(job));
        jobList.appendChild(li);
    });
}

// Function to show job details
function showJobDetails(job) {
    const jobDetailsContent = document.getElementById('job-details-content');
    jobDetailsContent.innerHTML = `
        <p><strong>Title:</strong> ${job.title}</p>
        <p><strong>Salary:</strong> ${job.salary} PKR</p>
        <p><strong>Description:</strong> ${job.description}</p>
        <p><strong>Experience:</strong> ${job.experience}</p>
        <p><strong>Incentive Offered:</strong> ${job.incentive} PKR</p>
        <p><strong>Recruiter:</strong> ${job.recruiter}</p>
    `;
    document.getElementById('job-details').style.display = 'block';
}

// Function to apply for job
function applyForJob(event) {
    event.preventDefault();
    // Logic for candidate application
    alert('Your application has been submitted!');
    // Clear form fields
    document.getElementById('candidate-application-form').reset();
    // Hide candidate application screen
    document.getElementById('candidate-application').style.display = 'none';
}

// Event listeners
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logic for recruiter registration
    alert('Registration successful! Please wait for admin approval.');
    // Clear form fields
    this.reset();
});

document.getElementById('job-posting-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logic for job posting
    alert('Job posted successfully!');
    // Clear form fields
    this.reset();
});

document.getElementById('apply-btn').addEventListener('click', function() {
    // Display candidate application screen
    document.getElementById('candidate-application').style.display = 'block';
});

document.getElementById('candidate-application-form').addEventListener('submit', applyForJob);

// Initial setup
displayJobs();
