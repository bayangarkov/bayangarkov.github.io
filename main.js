function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var modal3 = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "block";
    }
}

$(document).ready(function() {
    $("body").on("click", ".right.carousel-control,.left.carousel-control,.carousel-indicators li,.myCarousel-target", function() {


        var myParent = $('carouselExampleIndicators');
        var target = myParent.find('.item.active');

        myParent.css({
                'overflow': 'hidden',
                'height': '100vh'
            }).delay(500)
            .queue(function(next) {
                next();
                myParent.css({
                    'overflow': 'auto',
                    'height': 'auto'
                });
            })
    });
});
