
function addPanelListeners(panels) {
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClass(panels)
            panel.classList.add('active')
        })
    })
}

function removeActiveClass(panels) {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function initScript() {
    const panels = document.querySelectorAll('.panel')
    addPanelListeners(panels)
}

initScript()

