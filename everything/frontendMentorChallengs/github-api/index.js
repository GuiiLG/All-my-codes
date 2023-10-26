let lupa = document.querySelector('.lupa')
lupa.addEventListener('click', ()=>{
    let input = document.querySelector('.input').value


    fetch(url + input)
    .then(response =>{
        if (!response.ok){
            throw new Error('Error')
        }
        else {
            return response.json()
        }
    })
    .then(data =>{
        let login = data.login
        let Avatar = data.avatar_url
        let bio = data.bio
        let followers = data.followers
        let following = data.following
        let created_at = data.created_at
        

        let newUser = new creating(login, Avatar, bio, followers, following, created_at)
    })
})
let main = document.querySelector('main')

class creating{
    constructor(login, Avatar, bio, followers, following, created_at){
        
        let div = document.createElement('div')
        div.setAttribute('class', 'mainDiv')
        div.innerHTML = `
            <div class="mainDiv">
                <img class="profile" src="${Avatar}" alt=""> <span>Login:${login}</span><br>
                <div class="bio">Bio:${bio}</div> 
                <div>Followers:${followers}</div>
                <div>Following:${following}</div>
                <div>Created:${created_at}</span>
            </div>
        `
        
        main.appendChild(div)
    }
}

const url = 'https://api.github.com/users/'

