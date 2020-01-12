window.onload = function () {
    const myLiffId = "1653653236-OaMZ2Eqb"
    initLiff(myLiffId)
}

function initLiff(liffId) {
    liff.init({
        liffId: liffId
    }).then(() => {
        console.log('liff init succesfully')
    }).catch((err) => {
        console.log(err)
        alert('Something went wrong!')
    })
}

function sendAlertIfNotInClient() {
    alert('This button is unavailable as LIFF is currently being opened in an external browser.');
}