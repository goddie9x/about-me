$(document).ready(function() {

    function toggleItem(elementTrigger, elementTarget) {
        let triggerE = $(elementTrigger);
        if (triggerE) {
            triggerE.click(function() {
                $(elementTarget).toggleClass('active');
            });
        }
    }
    toggleItem('.main-nav-mobile', '.main-nav-bar-mobile');
})