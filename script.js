var friends = ['steve', 'bob', 'susan', 'rose', 'kanye'];

    for(var i = 0; i<friends.length; i++) {
    for(var j = 99; j > 0; j--) {
        if (j < 0) {
            console.log(j + ' lines of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' lines of code in the file'+j+' lines of code in the file,'+j+'lines of code;'+friends[i]+' strikes one out,clears it all out,'+j+' lines of code in the file.');
        }
        else if (j > 0) {
            console.log(j +' line of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' line of code in the file'+j+' line of code in the file,'+j+'line of code;'+friends[i]+' strikes one out,clears it all out,'+j+' no more lines of code in the file.');
        }

    };
};
var button = document.createElement("button");
button.innerHTML = "Click Me!";

// 2. Append somewhere
var body = document.getElementsByTagName("sing")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {});