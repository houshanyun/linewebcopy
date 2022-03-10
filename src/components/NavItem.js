const NavItem = ( { itemText, scssName } ) => {
    function addClass(e) {
        const myLink = document.querySelector(".bottomLine")
        myLink.style.left = e.target.offsetLeft + "px";
        myLink.style.width = e.target.offsetWidth + "px";
        myLink.style.transition = "all .5s ease-in-out 0s";
    }
    return (
        <>
            <li onClick={addClass} className={scssName}>{itemText}</li>
        </>
    )
}

export default NavItem;