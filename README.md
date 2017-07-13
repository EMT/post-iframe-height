# post-iframe-height

Cross origin way to communicate content height from an iframe to it’s parent.

## Usage

Include https://github.com/EMT/post-iframe-height/blob/master/post-frame-height.js in the page to be loaded in an iframe:

```
<script src="post-frame-height.js"></script>
```

In the parent page, give the iframe the same name and ID:

```
<iframe name="{ unique id }" id="{ unique id }" src="…">
```

And do something like:

```
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var listener = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
listener(messageEvent, function(e) {
    var key = e.message ? "message" : "data";
    var data = e[key];

    if (data.name && data.documentHeight) {
        document.getElementById(id).css({
            height: data.documentHeight + 'px'
        });
    }
}, false);
```
