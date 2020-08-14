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
            Header('Welcome'),
            Div('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et consequat sapien, sit amet dapibus diam. Nam sit amet eleifend diam, eget placerat orci. Aliquam vulputate sed turpis et ullamcorper. Ut congue ultrices orci, id pharetra eros faucibus sit amet. Donec commodo in nisi sed auctor. Maecenas consectetur enim vitae consequat vulputate. Aenean scelerisque, velit eu consequat dapibus, odio odio placerat nisi, a imperdiet magna neque vel metus.')
        ], { style: 'border-left: 2px solid #e63232; max-height: 100%; overflow-y: scroll;', class: 'container-content' }),

        Container([
            Header('About'),
            Div('Donec varius justo non turpis dignissim dignissim. Phasellus metus justo, iaculis quis augue a, iaculis tempor turpis. Proin venenatis leo quis eleifend fringilla. Phasellus euismod, sem id aliquam dignissim, elit ante hendrerit nisi, vitae cursus libero risus sed nibh. In venenatis felis nec nunc tincidunt, eu posuere lorem aliquet. Sed non semper velit. Mauris ut dictum enim. Vivamus volutpat, est et cursus auctor, lectus augue pellentesque libero, porta tempor metus nisi vitae est. Nullam facilisis ex in metus iaculis aliquam. Sed mattis massa ut est congue, eu consequat mi blandit. Nulla malesuada tincidunt ante, sed dignissim elit ornare at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque lacus nisi, rhoncus a ullamcorper ut, aliquet sed lectus. Morbi elementum nunc at lectus lobortis, at tincidunt enim egestas. Sed a dolor sodales, tempor orci a, commodo orci. In eu neque lacus.')
        ], { style: 'border-left: 2px solid #e63232; max-height: 100%; overflow-y: scroll;', class: 'container-content' }),

        Container([
            Header('Information'),
            Div('Nunc malesuada tellus id sollicitudin fringilla. Maecenas euismod tempor lectus rhoncus rhoncus. Aliquam scelerisque, risus ut pulvinar ultricies, nulla odio posuere nunc, id pharetra odio justo nec lectus. Aliquam erat volutpat. Sed rhoncus, magna vitae convallis scelerisque, neque quam finibus odio, sed accumsan odio nisi ut ante. Phasellus dolor enim, porttitor eget imperdiet vel, fringilla non lectus. Vestibulum eget tincidunt urna. Ut vitae lacus vel odio aliquet aliquam id eu felis. Nulla finibus tellus mauris, vitae facilisis magna finibus vel. Mauris consequat risus dui, feugiat feugiat mauris dapibus quis. Aliquam finibus sodales tincidunt. Etiam ac laoreet enim.')
        ], { style: 'border-left: 2px solid #e63232; max-height: 100%; overflow-y: scroll;', class: 'container-content' })

    ], { style: 'border-radius: 5px; background-color: #141414; height: 448px; overflow: hidden;', class: 'container-main' })
);

// Let the container be dragged by nav bar
draggable(ui.element, nav);
