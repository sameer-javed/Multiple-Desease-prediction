// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the search input and all symptom checkboxes
    const searchInput = document.getElementById('searchSymptoms');
    const symptoms = document.querySelectorAll('.symptom-checkbox');

    // Listen for keyup events on the search input
    searchInput.addEventListener('keyup', function() {
        // Get the search term and convert it to lowercase
        const searchTerm = searchInput.value.toLowerCase();

        // Loop through all symptoms and filter based on the search term
        symptoms.forEach(function(symptom) {
            const label = symptom.nextElementSibling.textContent.toLowerCase();
            if (label.includes(searchTerm)) {
                symptom.parentElement.style.display = ''; // Show the symptom
            } else {
                symptom.parentElement.style.display = 'none'; // Hide the symptom
            }
        });
    });
});
function validateForm() {
    // Get all checkboxes with name "symptoms"
    const checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');

    // Check if any checkbox is checked
    if (checkboxes.length === 0) {
        alert('Please select at least one symptom before pressing the predict button.');
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
