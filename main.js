names_of_people = [];
function submit () {  var guest_name =document.getElementById("name_of_the_guest_1").value;
    names_of_people.push(guest_name);
    var length_of_name= names_of_people.length;

       
    document.getElementById("display_name").innerHTML=names_of_people.toString();
   
}
function sorting(){
    names_of_people.sort();
    var i= names_of_people.join("<br>");
    document.getElementById("sorted").innerHTML=i.toString();





}
function show(){
    var i= names_of_people.join("<br>");
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block";
}