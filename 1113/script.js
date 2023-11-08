

document.getElementById('letters-button').addEventListener('click', function() {
    // Change the page to "letters.html" when the "Letters" button is clicked
    window.location.href = 'letters.html';
});

document.getElementById('pictures-button').addEventListener('click', function() {
    // Change the page to the "pictures.html" when the "Pictures" button is clicked
    window.location.href = 'pictures.html';

    // Show the Pictures section
    showSection('pictures-section');
    // You can add code here to populate the "Pictures" section with content.
});

document.getElementById('songs-button').addEventListener('click', function() {
    // Change the page to the "songs.html" when the "Songs" button is clicked
    window.location.href = 'songs.html';

    // Show the Songs section
    showSection('songs-section');
    // You can add code here to populate the "Songs" section with content.
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}


