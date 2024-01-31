export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    window.document.title = "Victor's Portfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    window.document.body.children[0].children[0].innerHTML = "Victor Alcaraz";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    window.document.body.children[1].children[1].innerHTML = "In 2015, Victor started his journey to becoming a CS major at RCC. He did obtain his C++ certification in 2017.";
}