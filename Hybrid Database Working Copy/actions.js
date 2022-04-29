const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')
document.querySelector('#newEntrySubmit').addEventListener("click", createEntry)

// function to cycle through tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document
            .querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        target.classList.add('active');
    })
})

// object constructor for new entries
function CreateEntry(devType, calStick, destination, date, engName) {
        this.devType = devType
        this.calStick = calStick
        this.destination = destination
        this.date = date
        this.engName = engName
    }

// function that gathers inputs from the "New Entry" tab to create a new object
function createEntry() {
    let newEntry = new CreateEntry(
        document.querySelector('#devTypeInput').value,
        document.querySelector('#calStickInput').value,
        document.querySelector('#destinationInput').value,
        document.querySelector('#dateInput').value,
        document.querySelector('#nameInput').value
    );
    console.log(newEntry)
}
