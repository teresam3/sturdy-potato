$( document ).ready(function(){ 
    
var askUrl = 'https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyC-JifvUQEcdKveiVLyVEF_Oy_Ea2EmfGg'

$.ajax(
    askUrl
).then(function(data) {
    console.log(data)

var names = []  

    for (var i=0; i < data.elections.length; i++) {
        names.push(data.elections[i].name)
        // console.log(data.elections[i].name)
        // $('.lead').append(data.elections[i].name)
    } 
    console.log(names)
})
 







})

