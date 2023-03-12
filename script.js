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

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 300)
        $(".back-to-top").fadeIn();
    else
        $(".back-to-top").fadeOut();
});

// to animate the numbers animation
const interval = setInterval(check_if_in_view, 50);

function check_if_in_view() 
{
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    var elem = $(".animate:last-child");
    var elem_height = elem.outerHeight();
    var elem_top_position = elem.offset().top;
    var elem_bottom_position = (elem_top_position + elem_height);

    if ((elem_bottom_position >= window_top_position) && (elem_top_position <= window_bottom_position)) 
    {
        clearInterval(interval);
        $.each($(".animate"), function () {
            animateValue(this, 0, this.innerHTML, 5000);
        });
    }
}

function animateValue(obj, start, end, duration) 
{
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) 
            startTimestamp = timestamp;

        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) 
            window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// // to check whether the media query detects properly
// setInterval(check, 50);
// function check(){
//     const mediaQuery = window.matchMedia('( max-width: 768px )')
//     // Note the `matches` property
//     if ( mediaQuery.matches ) {
//     console.log('Media Query Matched!')
//     }
// }