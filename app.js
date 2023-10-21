function toggleSidebar(){
    var sidebar = document.querySelector('.sideBar');
    sidebar.style.display = (sidebar.style.display === 'none') ? 'flex' : 'none';
}

document.getElementById('toggleButton').addEventListener('click', toggleSidebar);