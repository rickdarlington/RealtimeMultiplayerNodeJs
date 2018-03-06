var DemoClientGame = require('./DemoCircles/DemoClientGame');

(function () {
    var onDocumentReady = function () {
        var clientGame = new DemoClientGame();
    };

    window.addEventListener('load', onDocumentReady, false);
})();
