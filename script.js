// scripts.js

// Simple tab switching logic
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs and sections
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  
      // Add active class to the clicked tab and the corresponding section
      this.classList.add('active');
      document.querySelector(this.getAttribute('href')).classList.add('active');
    });
  });
  