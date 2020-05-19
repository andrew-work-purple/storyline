window.ver = '1.1'
console.log('storyline functions version ' + window.ver);

var customCSS = `
    .cs-base, body, .cs-custom-theme {
        background: #43268F !important;
    }
`
var style = document.createElement('style');
style.type = 'text/css';
document.head.appendChild(style);
style.appendChild(document.createTextNode(customCSS));

const controller = {
    slideType: '',
    slideProps: {},
    updateSlide(props) {
        this.slideType = props.slideType;
        this.slideProps = props.slideProps;
    },
    findSlideFunction() {
        switch(this.slideType) {
            case 'simclick': 
                this.simClick();
        }
    },
    simClickProps: {
        clickElm: {}
    },
    simClick() {
        this.simClickProps.clickElm = document.querySelector('div[data-acc-text*="Hotspot"]');
        console.log(this.simClickProps.clickElm);
    }
}
const eventController = {
    clickListener(event) {
        console.log(event);
    }
}
//add listeners
document.addEventListener('click',controller.clickListener(event));