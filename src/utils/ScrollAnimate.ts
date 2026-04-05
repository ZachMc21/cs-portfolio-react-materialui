import scrollama from "scrollama";

function ScrollAnimate() {
    var scroller = scrollama();

    scroller
    .setup({
        step: '.animista',
        offset: 0
    })
    .onStepEnter(function(response) {
        response.element.classList.add('appear');
    });

    window.addEventListener('resize', scroller.resize);
}

export default ScrollAnimate;