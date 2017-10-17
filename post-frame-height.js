(function() {
    if (!parent || !parent.postMessage || !name) {
        return;
    }

    var addEventListener = function(event, func) {
        if (window.addEventListener) {
            window.addEventListener(event, func);
        }
        else {
            window.attachEvent('on' + event, func);
        }
    };

    addEventListener('message', function(e) {
        var data = e.message || e.data;

        if (data === 'howHigh?') {
            var postMessageHeight = function() {
                parent.postMessage({
                    name: name,
                    documentHeight: document.body.scrollHeight
                }, e.origin);
            }

            addEventListener('resize', function() {
                postMessageHeight();
            });

            postMessageHeight();
        }
    });

})();
