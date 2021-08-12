
function generateCat() {
    var image = document.createElement( 'img' );
    var div = document.getElementById('flex-cat-gen');

    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    //image.src = "https://api.thecatapi.com/v1/images/search "
    div.appendChild(image);
}

function refresh() {
        window.location.reload("Refresh");
    
}
