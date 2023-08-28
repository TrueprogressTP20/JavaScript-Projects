// Getting Input
let filter = document.getElementById("filterInput");

// Add event listener
filter.addEventListener("keyup", filterNames);

function filterNames() {
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);

    // Get names ul
    let ul = document.getElementById('names');

    // Get lis from ul
    let li = ul.querySelectorAll("li.collection-item");

    // Loop through collecton-item lis
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
}
