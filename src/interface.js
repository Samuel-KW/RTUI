
class Interface {
    constructor (id, styles='', parent=document.body) {

        // Remove styles with the same ID
        while (document.getElementById(id + '-css')) document.getElementById(id + '-css').remove();

        this.style = document.createElement('style');
        this.style.textContent = styles; 
        this.style.id = id + '-css';
        (document.head || parent).appendChild(this.style);

        // Remove elements with the same ID
        while (document.getElementById(id)) document.getElementById(id).remove();

        // Create container element
        this.element = document.createElement('div');
        this.element.style = 'top: 0; left: 0;';
        this.element.id = id;

        // Append it to the parent
        parent.appendChild(this.element);        
    }

    create (type, content, style, parent) {

        // Create element of given type
        let elem = document.createElement(type);

        // Set the content and style
        elem.textContent = content;
        elem.style = style;

        // Append the elment to the parent
        parent.appendChild(elem);
        return elem;
    }

    // Dynamically return the text content of the element
    get text () {
        return this.element.textContent;
    }

    // Dynamically change the text content of the element
    set text (value) {
        this.element.textContent = value;
    }

    // Dynamically return the HTML content of the element
    get html () {
        return this.element.innerHTML;
    }

    // Dynamically set the HTML content of the element
    set html (value) {
        this.element.innerHTML = value;
    }
    
    // Get the position of the element
    get pos () {
        return {
            x: parseInt(this.element.style.left) || 0,
            y: parseInt(this.element.style.top) || 0
        };
    }
    
    // Set the position of the element
    set pos (coords={}) {
        this.element.style.top = coords.y + 'px';
        this.element.style.left = coords.x + 'px'; 
    }
}