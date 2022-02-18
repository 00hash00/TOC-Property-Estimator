
function validate()
{

    

    if(   document.getElementById("inputEmail").value == "yumnanasim27@gmail.com"
       && document.getElementById("inputPassword").value == "yumna27" )
    {
        alert( "Welcome yumna27" );
        window.open("home.html");
    } else if(   document.getElementById("inputEmail").value == "uzairkhan96@gmail.com"
       && document.getElementById("inputPassword").value == "khanuzair96" )
    {
        alert( "Welcome uzairkhan96" );
        window.open("home.html");
    } else if(   document.getElementById("inputEmail").value ==  "hashthetic99@gmail.com"
       && document.getElementById("inputPassword").value == "hashthetic99")
    {
        alert( "Welcome hashthetic99" );
        window.open("home.html");
    }
    else if(   document.getElementById("inputEmail").value ==  "ridaazam27@gmail.com"
       && document.getElementById("inputPassword").value == "ridaazam27")
    {
        alert( "Welcome hashthetic99" );
        window.open("home.html");
    }else if(   document.getElementById("inputEmail").value ==  "sherrysid18@gmail.com"
       && document.getElementById("inputPassword").value == "sidsherry18")
    {
        alert( "Welcome hashthetic99" );
        window.open("home.html");
    }
    else
    {
        alert( "Not a registered User" );
        location.href="index.html";
    }
}