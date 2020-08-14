function draggable (container, dragItem) {
    if (dragItem === undefined) dragItem = container;

    let xOffset = yOffset = 0,
        active = false,
        currentX,
        currentY,
        initialX,
        initialY;

    container.addEventListener('touchstart', dragStart, false);
    document.addEventListener('touchend', dragEnd, false);
    document.addEventListener('touchmove', drag, false);

    container.addEventListener('mousedown', dragStart, false);
    document.addEventListener('mouseup', dragEnd, false);
    document.addEventListener('mousemove', drag, false);

    function dragStart(e) {
        if (e.type === 'touchstart') {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        let ignoredElems = ['INPUT', 'BUTTON', 'A', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN'];
        if (e.target === dragItem || container === dragItem && ignoredElems.indexOf(e.target.nodeName) == -1) active = true;
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        active = false;
    }

    function drag(e) {
        if (active) {
            e.preventDefault();

            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, container);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
    }
}