$(document).ready(function(){
    $("#searchuser").on("keyup", function(e){
        var username = e.target.value;

        //make request to GitHub using AJAX
        $.ajax({
            url:"https://api.github.com/users/" + username,
            data: {
                client_id:"33ee5b6cb10f31eb3341",
                client_secret:"b209ca4623142babc5dd3c3651bedb9a8b682c13",
            }
        }).done(function(user){
            console.log(user);
        });
    })
});