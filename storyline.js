window.ver = '1.0'
console.log('storyline functions version' + window.ver);

var customCSS = `
    .cs-custom-theme {
        background: #43268F !important;
    }
`
var style = document.createElement('style');
style.type = 'text/css';
document.head.appendChild(style);
style.appendChild(document.createTextNode(customCSS));