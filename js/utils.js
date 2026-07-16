export function createNavbar() {

    const navbar = document.getElementById("navbar");

    navbar.innerHTML = `

<nav class="navbar">

    <div class="logo">

        Portfolio

    </div>

    <ul class="nav-links">

        <li><a href="#">🏠 Home</a></li>

        <li><a href="#">💼 Work</a></li>

        <li><a href="#">📝 Blog</a></li>

        <li><a href="#">👤 About</a></li>

        <li><a href="#">⬇ Downloads</a></li>

    </ul>

    <button class="theme-button">

        🌙

    </button>

</nav>

`;

}