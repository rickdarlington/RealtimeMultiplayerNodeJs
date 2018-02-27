import DemoClientGame from './DemoCircles/DemoClientGame';

(function () {
    var WEB_SOCKET_SWF_LOCATION = "ABC";
    // Callback for when browse is ready
    var onDocumentReady = function () {
        var clientGame = new DemoClientGame();
    };

    // Listen for ready
    window.addEventListener('load', onDocumentReady, false);
})();
