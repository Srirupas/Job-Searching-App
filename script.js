const jobs = [
    {
      title: "Frontend Developer",
      company: "TechNova",
      location: "Remote",
      type: "Full Time",
      description: "Build responsive UI using React."
    },
    {
      title: "Backend Engineer",
      company: "CloudStack",
      location: "Bangalore",
      type: "Full Time",
      description: "Develop RESTful APIs and database models."
    },
    {
      title: "UI/UX Designer",
      company: "DesignPro",
      location: "Hyderabad",
      type: "Part Time",
      description: "Design intuitive interfaces for web apps."
    },
    {
      title: "Software Intern",
      company: "StartupHub",
      location: "Remote",
      type: "Internship",
      description: "Assist in development and testing."
    }
  ];
  
  const jobsContainer = document.getElementById('jobsContainer');
  const searchInput = document.getElementById('searchInput');
  const locationFilter = document.getElementById('locationFilter');
  const typeFilter = document.getElementById('typeFilter');
  
  function displayJobs(filteredJobs) {
    jobsContainer.innerHTML = '';
    if (filteredJobs.length === 0) {
      jobsContainer.innerHTML = '<p>No jobs found.</p>';
      return;
    }
  
    filteredJobs.forEach(job => {
      const jobEl = document.createElement('div');
      jobEl.className = 'job-card';
      jobEl.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p>${job.description}</p>
      `;
      jobsContainer.appendChild(jobEl);
    });
  }
  
  function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase();
    const location = locationFilter.value;
    const type = typeFilter.value;
  
    const filtered = jobs.filter(job => {
      return (
        (job.title.toLowerCase().includes(searchTerm) ||
         job.company.toLowerCase().includes(searchTerm)) &&
        (location === '' || job.location === location) &&
        (type === '' || job.type === type)
      );
    });
  
    displayJobs(filtered);
  }
  
  searchInput.addEventListener('input', filterJobs);
  locationFilter.addEventListener('change', filterJobs);
  typeFilter.addEventListener('change', filterJobs);
  
  // Initial load
  displayJobs(jobs);
  