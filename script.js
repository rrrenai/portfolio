async function fetchRepos() {
    const response = await fetch("https://api.github.com/users/rrrenai/repos");
    const repos = await response.json();
    
    let repoList = document.getElementById("repos");
    repos.forEach(repo => {
        let item = document.createElement("li");
        item.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description}`;
        repoList.appendChild(item);
    });
}

window.onload = fetchRepos;