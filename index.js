var Btn = document.querySelector("#Srchbtn");
Btn.addEventListener("click",function(){
    var SearchBox = document.getElementById("searchBox-1");
    var keyword = SearchBox.value;
    keyword = keyword.toUpperCase();
    var Tablerow = document.querySelectorAll(".table-row");
    for (var i = 0; i < Tablerow.length; i++) {
        var all_columns = Tablerow[i].getElementsByClassName("row-item");
        for (j = 0; j < all_columns.length; j++) {
            if (all_columns[j]) {
                var column_value = all_columns[j].textContent || all_columns[j].innerText;
                column_value = column_value.toUpperCase();
                if (column_value.indexOf(keyword) > -1 && keyword !== "") {
                    Tablerow[i].style['background-color'] = "#0f0"; // show
                    break;
                } else {
                    Tablerow[i].style['background-color'] = "#fff"; // hide
                }
            }
        }
    }
})