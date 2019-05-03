var addEvent = function (object, type, callback) {
    if (object == null || typeof (object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
    }
};

addEvent(window, "resize", function (event) {
    console.log('resized');
    var windowwidth = window.innerWidth;
    var leftcontainer = document.getElementsByClassName('leftcontainer')[0];
    if (windowwidth < 768) {
        leftcontainer.style.width = "100%";
    } else {
        leftcontainer.style.width = "40%";
    }
});