document.getElementById('search-icon').addEventListener('click', function() {
    var searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        searchBar.focus(); // Focus on the input when it becomes active
    }
});

document.getElementById('shopping-icon').addEventListener('click', function() {
    document.getElementById('slide-out-page').classList.toggle('active');
});
document.getElementById('cancel-button').addEventListener('click', function() {
    document.getElementById('slide-out-page').classList.remove('active');
});


   