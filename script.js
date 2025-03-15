async function buscarUsuario() {
    const userId = document.getElementById("userId").value;
    const userInfoDiv = document.getElementById("user-info");

    if (!userId) {
        userInfoDiv.innerHTML = "<p>Por favor, insira um ID válido.</p>";
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error("Usuário não encontrado");
        }

        const user = await response.json();

        userInfoDiv.innerHTML = `
            <h3>Informações do Usuário</h3>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Nome:</strong> ${user.name}</p>
            <p><strong>Usuário:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Telefone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city} - CEP: ${user.address.zipcode}</p>
            <p><strong>Geo Localização:</strong> Latitude: ${user.address.geo.lat}, Longitude: ${user.address.geo.lng}</p>
        `;
    } catch (error) {
        userInfoDiv.innerHTML = "<p>Usuário não encontrado.</p>";
    }
}
