import { useEffect, useRef, useState } from "react";
import Picture from "./Picture";
import Scroll from "./Scroll";
import { v4 } from "uuid";
import "./headerAnimation.scss"

function HeaderAnimation() {
    const [active, setActive] = useState(false);
    const headerRef = useRef(null);
    const prevScrollY = useRef(0);
    const imgs = [
        "https://picsum.photos/1920/1080?random=1",
        "https://picsum.photos/1920/1080?random=2"
    ];
    useEffect(() => {
            function handleScroll() {
                const currentScrollY = window.scrollY;
                if (currentScrollY > prevScrollY.current) {
                    headerRef.current.classList.add("active");
                    setActive(true);
                } else if (currentScrollY < prevScrollY.current) {
                    headerRef.current.classList.remove("active");
                    setActive(false);
                }
                prevScrollY.current = currentScrollY;
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [active]);
    return (
        <ul className="headerAnimation" ref={headerRef}>
            {imgs.map(item => <Picture key={v4()} src={item} />)}
            {!active && <Scroll />}
        </ul>
    );
}
export default HeaderAnimation;