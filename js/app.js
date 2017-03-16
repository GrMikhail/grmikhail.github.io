var weddingDate = new Date(2017, 06, 10, 12);
var receptionDate = new Date(2017, 06, 10, 12, 45);

$(document).ready(function () {
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    var interval = setInterval(checkWeddingDate, 1000);
});

function checkWeddingDate() {
    var today = Date.now();
    if (today >= weddingDate && today <= receptionDate) {
        $(".wedding-counter-title")[0].textContent = "Прямо сейчас идет регистрация нашего брака";
        $(".wedding-counter-title").parent().next().hide()
    } else {
        var weddingDateCounter;
        if (weddingDate > today) {
            weddingDateCounter = new WeddingDateCounter(today, weddingDate.getTime())
            $(".wedding-counter-title")[0].textContent = "До нашей свадьбы осталось:";
        } else if (weddingDate < today) {
            $(".wedding-counter-title")[0].textContent = "Мы женаты уже:";
            if (!$(".wedding-counter-title").is(":hidden")) {
                $(".wedding-counter-title").parent().next().show();
            }
            weddingDateCounter = new WeddingDateCounter(weddingDate.getTime(), today)
        }

        $(".days")[0].textContent = weddingDateCounter.days;
        $(".days-description")[0].textContent = weddingDateCounter.daysDescription();

        $(".hours")[0].textContent = weddingDateCounter.hours;
        $(".hours-description")[0].textContent = weddingDateCounter.hoursDescription();

        $(".minutes")[0].textContent = weddingDateCounter.minutes;
        $(".minutes-description")[0].textContent = weddingDateCounter.minutesDescription();

        $(".seconds")[0].textContent = weddingDateCounter.seconds;
        $(".seconds-description")[0].textContent = weddingDateCounter.secondsDescription();
    }
}

function WeddingDateCounter(startDate, endDate) {
    var diff = endDate - startDate;
    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= this.days * (1000 * 60 * 60 * 24);

    this.hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= this.hours * (1000 * 60 * 60);

    this.minutes = Math.floor(diff / (1000 * 60));
    diff -= this.minutes * (1000 * 60);

    this.seconds = Math.floor(diff / (1000));
    diff -= this.seconds * (1000);

    this.daysDescription = function () {
        var r = this.days % 10;
        if (r == 0 || (r >= 5 && r <= 9)) {
            return "Дней";
        } else if (r == 1) {
            return "День";
        } else if (r >= 2 && r <= 4) {
            return "Дня";
        }
    }

    this.hoursDescription = function () {
        var r = this.hours % 10;
        if (r == 0 || (r >= 5 && r <= 9) || (this.hours >= 11 && this.hours <= 19)) {
            return "Часов";
        } else if (r == 1) {
            return "Час";
        } else if (r >= 2 && r <= 4) {
            return "Часа";
        }
    }

    this.minutesDescription = function () {
        var r = this.minutes % 10;
        if (r == 0 || (r >= 5 && r <= 9)) {
            return "Минут";
        } else if (r == 1) {
            return "Минута";
        } else if (r >= 2 && r <= 4) {
            return "Минуты";
        }
    }

    this.secondsDescription = function () {
        var r = this.seconds % 10;
        if (r == 0 || (r >= 5 && r <= 9)) {
            return "Секунд";
        } else if (r == 1) {
            return "Секунда";
        } else if (r >= 2 && r <= 4) {
            return "Секунды";
        }
    }
}