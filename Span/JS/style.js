'use strict';

$(".pagination").append("<a id ='previous-page' href='javascript:void(0)'>Previous</a>");
var numberOfItems = $("#loop .card--1").length;
var limitPerPage = 2;
$("#loop .card--1:gt(" + (limitPerPage -1) + ")").hide();
var totalPages = Math.round(numberOfItems / limitPerPage);
$(".pagination").append("<a class='current-page active' href='javascript:void(0)'>" + 1 + "</a>");

for (var i = 2; i <= totalPages; i++) {
    $(".pagination").append("<a class='current-page' href='javascript:void(0)'>" + i + "</a>");
}

$(".pagination").append("<a id='next-page' href='javascript:void(0)'>Next</a>");

$(".pagination a.current-page").on("click", function() {
    if($(this).hasClass("active")) {
        return false;
    } else {
        var currentPage = $(this).index();
        $(".pagination a").removeClass("active");
        $(this).addClass("active");
        $("#loop .card--1").hide();

        var grandTotal = limitPerPage * currentPage;
       
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#loop .card--1:eq(" + i + ")").show();
        }
    }
});

$("#next-page").on("click", function () {
    var currentPage = $(".pagination a.active").index();
    if (currentPage === totalPages) {
        return false;
    } else {
        currentPage++;
        $(".pagination a").removeClass("active");
        $("#loop .card--1").hide();

        var grandTotal = limitPerPage * currentPage;
       
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#loop .card--1:eq(" + i + ")").show();
        }
        $(".pagination a.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
    }
});

$("#previous-page").on("click", function () {
    var currentPage = $(".pagination a.active").index();
    if (currentPage === 1) {
        return false;
    } else {
        currentPage--;
        $(".pagination a").removeClass("active");
        $("#loop .card--1").hide();

        var grandTotal = limitPerPage * currentPage;
       
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#loop .card--1:eq(" + i + ")").show();
        }
        $(".pagination a.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
    }
});
