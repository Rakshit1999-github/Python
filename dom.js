var xx = document.getElementsByClassName("list-group-item");
xx[0].style.backgroundColor = 'green';
xx[1].style.backgroundColor="gray";
var tt = document.querySelector(".list-group-item:nth-child(2)");
tt.style.color='green';
var txt = document.querySelectorAll("li:nth-child(odd)");
for (var i=0; i<txt.length; i++){
    txt[i].style.backgroundColor= "green";
}