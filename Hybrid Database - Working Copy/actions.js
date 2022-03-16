const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')
document.getElementById('newEntrySubmit').addEventListener("click", newEntry)

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

let arrayValues = []
function newEntry() {
    let input = document.getElementsByName('array[]');
    
    for (var i = 0; i < input.length; i++) {
        let a = input[i];
        arrayValues = arrayValues + "array[" + i + "].value = " + a.value + " "
    }

    // alert(arrayValues);
    
}