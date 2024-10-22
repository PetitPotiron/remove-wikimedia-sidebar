browser.storage.local.get('status').then((st) => {
    if (st.status == 'enabled') {
        document.getElementById('mw-panel').remove()
        document.getElementById('content').style.marginLeft = '0'
        document.getElementById('left-navigation').style.marginLeft = '0'
    }
})