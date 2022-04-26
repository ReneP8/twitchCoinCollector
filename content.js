function goToActivityTab() {
    var bonusButton = document.getElementsByClassName("claimable-bonus__icon")[0];
    if (bonusButton) {
        console.log("Twitch Punkte eingesammelt.");
        bonusButton.click();
    }
}
setInterval(goToActivityTab, 60000);