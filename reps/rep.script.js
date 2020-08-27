$( document ).ready(function(){ 
    
    var address = '14815 Dunton Dr'
    var askUrl = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyC-JifvUQEcdKveiVLyVEF_Oy_Ea2EmfGg&address=' + address
    
    $.ajax(
        askUrl
    ).then(function(data) {
        console.log(data)
    
    // var names = []  
    
    //     // for (var i=0; i < data.elections.length; i++) {
    //     //     names.push(data.elections[i].name)
    //     //     // console.log(data.elections[i].name)
    //     //     // $('.lead').append(data.elections[i].name)
    //     // } 
    //     // console.log(names)
    })
     
    
    
    
    
    
    
    
    })