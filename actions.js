const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

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