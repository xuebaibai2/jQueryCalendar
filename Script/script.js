$(document).ready(function () {
    var count = 0;
    calendar.init();
    $("input[name=option]").on("change", function () {
        switch ($(this).val()) {
            case "option1":
                calendar.addEventSource([
                    { id: "1", title: "1 Tour", start: "2017-07-13 09:00:00.000", end: "2017-07-13 11:30:00.000", IsInvoiceOnly: 1 },
                    { id: "2", title: "2 Tour", start: "2017-07-20 10:00:00.000", end: "2017-07-20 11:30:00.000", IsInvoiceOnly: 0 },
                    { id: "3", title: "3 Tour", start: "2017-07-21 12:00:00.000", end: "2017-07-21 13:30:00.000", IsInvoiceOnly: 1 },
                    { id: "4", title: "4 Tour", start: "2017-07-04 12:00:00.000", end: "2017-07-04 13:30:00.000", IsInvoiceOnly: 1 },
                ]);
                break;
            case "option2":
                calendar.addEventSource([
                    { id: "8", title: "5 Tour", start: "2017-07-14 09:00:00.000", end: "2017-07-14 11:00:00.000", IsInvoiceOnly: 1 },
                    { id: "5", title: "6 Tour", start: "2017-07-19 14:00:00.000", end: "2017-07-19 14:30:00.000", IsInvoiceOnly: 0 },
                    { id: "6", title: "7 Tour", start: "2017-07-21 10:00:00.000", end: "2017-07-21 11:30:00.000", IsInvoiceOnly: 1 },
                    { id: "7", title: "8 Tour", start: "2017-07-04 14:00:00.000", end: "2017-07-04 15:30:00.000", IsInvoiceOnly: 1 },
                ]);
                break;
            default:
        }
    });
    
    calendar.onTourCellHoverIn = function ($currentCell) {
        $currentCell.addClass("enable");
    }
    calendar.onTourCellHoverOut = function ($currentCell) {
        $currentCell.removeClass("enable");
    }
    calendar.onTourClick = function (tourObj,$currentCell) {
        console.log(tourObj);
        console.log($currentCell);
    }
});