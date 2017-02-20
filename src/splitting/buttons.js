
import $ from 'jquery';

export function button1(){

    var button = $('<button>Button 1</button>').click(
        () => {
            System.import('./page1')
            .then(pageModule => { 
            $   ('div#container').html(pageModule.default);
            })
        }
    );

    return button;
}

export function button2(){

    var button = $('<button>Button 2</button>').click(
        () => {
            System.import('./page2')
            .then(pageModule => { 
            $   ('div#container').html(pageModule.default);
            })
        }
    );

    return button;
}