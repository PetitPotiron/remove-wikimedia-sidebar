// i18n
document.title = browser.i18n.getMessage('extensionName')
document.getElementById('label').innerText = browser.i18n.getMessage('statusCheckboxLabel')
document.getElementById('title').innerText = browser.i18n.getMessage('popupTitle')

// status
const checkbox = document.getElementById('status')
browser.storage.local.get({ status: "enabled" }).then((st) => {
    if (st.status == "enabled") {
        checkbox.checked = true
    } else {
        checkbox.checked = false
    }
})

checkbox.addEventListener('change', (event) => {
    if (checkbox.checked == true) {
        browser.storage.local.set({ status: "enabled" })
    } else {
        browser.storage.local.set({ status: "disabled" })
    }
})
