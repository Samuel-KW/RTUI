function Header (content, options={}) {

    // Create new header element
    let element = document.createElement('h2');
    element.textContent = content;

    // Set style and class
    element.style = 'display: block; padding: 5px; margin: 0; color: #fff; border-bottom: #fff; font-size: 1.5em; font-weight: 400;' + (options.style || '');
    if (options.class) element.className = options.class;

    // Return the created element
    return element;
}

function Button (content, options={}) {

    // Create new header element
    let element = document.createElement('button');
    element.textContent = content;

    // Set style and class
    element.style = 'display: block; padding: 5px; margin: 0; color: #fff; border-bottom: #fff;' + (options.style || '');
    if (options.class) element.className = options.class;

    // Add listener
    if (options.onclick) element.addEventListener('click', options.onclick);

    // Return the created element
    return element;
}

function Span (content, options={}) {

    // Create new span element
    let element = document.createElement('span');
    element.textContent = content;

    // Set style and class
    element.style = 'padding: 5px; margin: 0;  color: #eee;' + (options.style || '');
    if (options.class) element.className = options.class;

    // Return the created element
    return element;
}

function Div (content, options={}) {

    // Create new span element
    let element = document.createElement('div');
    element.textContent = content;

    // Set style and class
    element.style = 'display: block; padding: 5px; margin: 0;  color: #eee;' + (options.style || '');
    if (options.class) element.className = options.class;

    // Return the created element
    return element;
}

function Container (children=[], options={}) {

    // Create new container element
    let element = document.createElement('div');

    // Set style and class
    element.style = 'display: block; padding: 0; margin: 0;' + (options.style || '');
    if (options.class) element.className = options.class;

    // Add children to the container
    for (let i = 0; i < children.length; ++i)
        element.appendChild(children[i]);

    // Return the created container
    return element;
}