async function fetchRepos() {
    const response = await fetch("https://api.github.com/users/rrrenai/repos");
    const repos = await response.json();
    
    let repoList = document.getElementById("repos");
    repoList.innerHTML = ""; // Clear previous entries

    repos.forEach(repo => {
        let item = document.createElement("li");
        item.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description || "No description"}`;
        repoList.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("about-btn");
    const projectsBtn = document.getElementById("projects-btn");

    const defaultContent = document.getElementById("default");
    const aboutContent = document.getElementById("about-content");
    const projectsContent = document.getElementById("projects-content");

    function showContent(contentToShow) {
        [defaultContent, aboutContent, projectsContent].forEach(content => {
            content.classList.add("hide");
            content.classList.remove("show");
        });

        contentToShow.classList.add("show");
        contentToShow.classList.remove("hide");

        if (contentToShow === projectsContent) {
            fetchRepos();
        }
    }

    // Show default content on load
    showContent(defaultContent);

    aboutBtn.addEventListener("click", () => showContent(aboutContent));
    projectsBtn.addEventListener("click", () => showContent(projectsContent));
});