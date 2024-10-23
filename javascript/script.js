document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
  
    dropdown.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      dropdownContent.style.opacity = dropdownContent.style.display === 'block' ? '1' : '0';
      dropdownContent.style.visibility = dropdownContent.style.display === 'block' ? 'visible' : 'hidden';
    });
  
    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownContent.style.opacity = '0';
        dropdownContent.style.visibility = 'hidden';
      }
    });
  });
  