var friends = ['steve', 'bob', 'susan', 'rose', 'kanye'];

    for(var i = 0; i<friends.length; i++) {
    for(var j = 99; j > 0; j--) {
        if (j < 0) {
            console.log(j + ' lines of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' lines of code in the file'+j+' lines of code in the file,'+j+'lines of code;'+friends[i]+' strikes one out,clears it all out,'+j+' lines of code in the file.');
        }
        else if (j === 2) {
            console.log(j +' line of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' line of code in the file'+j+' line of code in the file,'+j+'line of code;'+friends[i]+' strikes one out,clears it all out,'+j+' no more lines of code in the file.');
        }

    };
};
function myFunction() {
    document.getElementsByClassName("friends").innerHTML = "Hello World";
}