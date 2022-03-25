// Your code here
let state = {
    form: document.querySelector('form'),
    name: document.querySelector('#githubuser'),
    table: document.querySelector('#myTable'),
    error: document.querySelector('.error'),
    url: `https://api.github.com/users`,
}

/* Llamada con el envio del formulario */
state.form.addEventListener('submit', async function(e){
    e.preventDefault();
    // Ocultamos el mensaje de error.
    state.error.style.display = 'none';

    // Tratamos los datos en la url.
    let user = state.name.value;    
    let resp = await fetch(`${state.url}/${user}`);
    let json = await resp.json();
    
    // Añadimos una fila a la tabla con la información del usuario.
    addRow(json, user);

})

/* Procesamos los datos */
function addRow(json, user){

    console.log(json);

    if(json.message == 'Not Found'){
        state.error.style.display = 'block';
        state.error.querySelector('del').innerHTML = user;
        return;
    }

    state.table.insertAdjacentHTML('beforeend', `
        <tr>
            <td>
                ${json.login}
            </td>
            <td>
                <img src='${json.avatar_url}'>
            </td>
            <td>
                ${json.bio}
            </td>
            <td>
                ${json.html_url}
            </td>
        </tr>
    `)
}