$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".nav-links").slideToggle();
        $(".line").toggleClass("active");

    });

    // selecting the add button
    $(".book-card a:not([href='#'])").click(function () {
        let content = this.innerHTML;
        if (content == "Add +") {
            this.innerHTML = "Added";
            this.style.backgroundColor = "#4f4";
        }
        else {
            this.innerHTML = "Add +";
            this.style.backgroundColor = "#333";
        }
    });
});

// // to check whether the media query detects properly
// setInterval(check, 50);
// function check(){
//     const mediaQuery = window.matchMedia('( max-width: 768px )')
//     // Note the `matches` property
//     if ( mediaQuery.matches ) {
//     console.log('Media Query Matched!')
//     }
// }