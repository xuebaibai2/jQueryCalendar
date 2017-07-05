$(document).ready(function () {
    var count = 0;
    calendar.init();
    calendar.addEventSource([
        { id: "1", title: "First Tour", start: "2017-07-13 09:00:00.000", end: "2017-07-13 11:30:00.000", IsInvoiceOnly: 1 },
        { id: "2", title: "Second Tour", start: "2017-07-20 10:00:00.000", end: "2017-07-20 11:30:00.000", IsInvoiceOnly: 0 },
        { id: "3", title: "Third Tour", start: "2017-07-21 12:00:00.000", end: "2017-07-21 13:30:00.000", IsInvoiceOnly: 1 },
        { id: "4", title: "Third Tour", start: "2017-07-04 12:00:00.000", end: "2017-07-04 13:30:00.000", IsInvoiceOnly: 1 },
    ]);
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