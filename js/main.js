$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;
        
        // make request to Github

        $.ajax({
            url:'https://api.github.com/users/'+username,
            data:{
                client_id:'b9315bcd5a07fcd759d8',
                client_secret:'a2b698bf7e7c02f898197cf136d1a41f704ca8e4'
            }
        }).done(function(user){
            $('#profile').html(`
                ${user.name}
            `);
        });
    });
});