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
                <div class="card border-primary mb-3" style="max-width: 100rem;" >
                <div class="card-header"><h3>${user.name}</h3></div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-thumbnail" src="${user.avatar_url}">
                            <a target="_blank" class="btn btn-primary btn-btn-block" href="${user.html_url}">View Profile</a>
                        </div>
                        <div class="col-md-9">
                            <span class="label label-dark">Public Repos: ${user.public_repos}</span>
                            <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                            <span class="label label-success">Public Followers: ${user.followers}</span>
                            <span class="label label-danger">Following: ${user.following}</span>
                            <br>
                            <br>
                            <ul class="list-group">
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Member since: ${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            `);
        });
    });
});