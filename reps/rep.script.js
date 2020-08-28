$( document ).ready(function(){ 
    
    let address = '14815 Dunton Dr'
    Const askUrl = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyC-JifvUQEcdKveiVLyVEF_Oy_Ea2EmfGg&address=' + address
    
    $.ajax(
        askUrl
    ).then(function(data) {
        console.log(data)
    

    })
     
    
    
    
    
    
    
    
    })