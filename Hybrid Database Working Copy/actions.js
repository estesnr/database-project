const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')
document.querySelector('#newEntrySubmit').addEventListener("click", createEntry)

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

function CreateEntry(devType, calStick, destination, date, engName) {
        this.devType = document.querySelector('#devTypeInput').value;
        this.calStick = document.querySelector('#calStickInput').value;
        this.destination = document.querySelector('#destinationInput').value;
        this.date = document.querySelector('#dateInput').value;
        this.engName = document.querySelector('#nameInput').value;
    }

function createEntry() {
    let newEntry = new CreateEntry();
    console.log(newEntry)
}
// let arrayValues = []
// function newEntry() {
//     let input = document.getElementsByName('array[]');
    
//     for (var i = 0; i < input.length; i++) {
//         let a = input[i];
//         arrayValues = arrayValues + "array[" + i + "].value = " + a.value + " "
//     }

//     // alert(arrayValues);
    
// }