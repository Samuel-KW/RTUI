// Set up the interface
let uuid = 'custom',
    ui = new Interface(uuid + '-ui', `
    #${uuid}-ui div::-webkit-scrollbar {
        width: 10px;
    }

    #${uuid}-ui div::-webkit-scrollbar-track {
        background: transparent;
    }

    #${uuid}-ui div::-webkit-scrollbar-thumb {
        background: #888; 
    }

    #${uuid}-ui div::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    #${uuid}-ui {
        box-shadow: 0 5px 35px rgba(0, 0, 0, .75);
        font-family: Roboto, arial, sans-serif;
        width: 350px; height: 475px;
        display: block; opacity: 1;
        background-color: #202020;
        border: 2px solid #202020;
        box-sizing: border-box;
        padding: 0; margin: 0;
        z-index: 2147483647;
        overflow: hidden;
        position: fixed;
        color: red;
    }
`);

// Create nav bar
let nav = ui.create('div', '', 'height: 25px; color: #fff; padding: 0; margin: 0; background-color: #202020; cursor: move;', ui.element);

// Create content for the container
ui.element.appendChild(
    Container([

        Container([
            Header('Weiner World'),
            Div('Here you can find weiners from all over the world')
        ], { style: 'border-left: 2px solid #e63232; max-height: 100%; overflow-y: scroll;', class: 'container-content' }),

        Container([
            Header('Pickle Jim'),
            Div('Pickle Jim was a brave young lad who lived in the sea')
        ], { style: 'border-left: 2px solid #e63232; max-height: 100%; overflow-y: scroll;', class: 'container-content' }),

        Container([
            Header('Young Sausage'),
            Div('The main protagonist in the story we call our life')
        ], { style: 'border-left: 2px solid #e63232; max-height: 100%; overflow-y: scroll;', class: 'container-content' })

    ], { style: 'border-radius: 5px; background-color: #141414; height: 448px; overflow: hidden;', class: 'container-main' })
);

// Let the container be dragged by nav bar
draggable(ui.element, nav);