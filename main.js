function carrega1() { 

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {

        let data = JSON.parse(this.responseText);
        console.log(data);


        let bio = `
        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${data.avatar_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.bio}</p>
                    <a href="${data.html_url}" class="btn btn-primary">Acessar Perfil</a>
                </div>
            </div>
        </div>
    <div class="row justify-content-center">
    <div class="col-9 banner1 text-center">Site contendo meus repositorios no github
    </div>
    </div>`
        document.getElementById('perfil').innerHTML = bio;
    }
    xhr.open('GET', 'https://api.github.com/users/Andreixzc');
    xhr.send()
}

function carrega() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        // alert('Retorno da Requisição: \n' + this.responseText);
        let data = JSON.parse(this.responseText);
        console.log(data);
        let perfilStr = ` 
    <div class="col-12 text-center">
    <p class="titulo">Repositórios:</p>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <div class="card1" style="width: 18rem;">
                    <div class="card-body">
                    <i class="fab fa-github"></i>
                        <h5 class="#">${data[0].name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <p class="card-text">${data[0].description}</p>
                        <a href="${data[0].html_url}" class="card-link">Acesse o Repositorio</a>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <div class="card1" style="width: 18rem;">
                    <div class="card-body">
                        <i class="fab fa-github"></i>
                        <h5 class="#">${data[1].name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <p class="card-text">${data[1].description}</p>
                        <a href="${data[1].html_url}" class="card-link">Acesse o Repositorio</a>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <div class="card1" style="width: 18rem;">
                    <div class="card-body">
                        <i class="fab fa-github"></i>
                        <h5 class="#">${data[2]?.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <p class="card-text">${data[2]?.description}</p>
                        <a href="${data[2]?.html_url}" class="card-link">Acesse o Repositorio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        document.getElementById('tela').innerHTML = perfilStr;
    }
    xhr.onerror = function () {
        alert(`Erro na requisiçao \nCódigo: ${this.status} - ${this.statustext}`);
    }

    xhr.open('GET', 'https://api.github.com/users/Andreixzc/repos');
    xhr.send()

}
var form = document.getElementById("myForm")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')


    fetch("https://api.github.com/users/" +originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
            document.getElementById("result").innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${data.avatar_url}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">Biografia:${data.bio}</p>
    </div>
    <div class="card-body">
        <a href="${data.html_url}" class="card-link">Acesse o Perfil</a>
        <a href="" class="card-link">${data.location}</a>
    </div>
</div>
            `
        })

}) 



