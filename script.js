/** Toggles the menu and hamburger icon classes to show or hide the menu.
 *
 * @function toggleMenu
 * @returns {Void} This function doesn't return anything
*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}