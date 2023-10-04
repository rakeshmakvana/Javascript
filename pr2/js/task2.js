var season = '';
var month = 10;

document.getElementById('month').innerHTML = "Month = "+month;

if (month == 11 || month == 12 || month == 1 || month == 2) {
    season = 'winter';
} else if (month == 3 || month == 4 || month == 5 || month == 6) {
    season = 'summar';
} else if (month == 7 || month == 8 || month == 9 || month == 10) {
    season = 'monsoon';
}


switch (season) {

    case 'winter':
        document.querySelector('.ss').innerHTML = "Season = Winter";
        break;

    case 'summar':
        document.querySelector('.ss').innerHTML = "Season = Summar";
        break;

    case 'monsoon':
        document.querySelector('.ss').innerHTML = "Season = Monsoon";
        break;

    default:
        document.querySelector('.ss').innerHTML = "Season = Invalide Season.";
        break;

}