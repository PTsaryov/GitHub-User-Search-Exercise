// JavaScript source code

function GetUsers() {

    const userValue = document.getElementById("usersearchbox").value;

    fetch('https://api.github.com/search/users?state:open&order=asc&q=' + userValue, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
    })
        .then((response) => response.json()
            .then(parsedJSON => parsedJSON.items.map(user => (
                {
                    name: `${user.login}`,
                    thumbnail: `${user.avatar_url}`,
                    page_url: `${user.html_url}`
                }
            )))
            .then(users => this.setState({
                users
            }))
            .catch(error => this.error_message(error)));
                
    }