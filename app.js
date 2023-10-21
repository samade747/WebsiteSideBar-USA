function toggleSidebar(){
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.display = (sidebar.style.display === 'none') ? 'flex' : 'none';
}

document.getElementById('toggleButton')