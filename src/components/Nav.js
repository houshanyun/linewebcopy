import LangSelect from "./Lang";
import { v4 } from "uuid";
import NavItem from "./NavItem";
import "./nav.scss";

const Nav = () => {
    const itemText = [
        {
            "id": v4(),
            "name": "Life on CODE"
        },
        {
            "id": v4(),
            "name": "元件設計"
        },
        {
            "id": v4(),
            "name": "虎克大好"
        },
        {
            "id": v4(),
            "name": "",
            "scssName": "bottomLine"
        }
    ]
    return (
        <nav>
            <div className="logo">CODE</div>
            <ul className="myList">
                {
                    itemText.map( item => <NavItem key={item.id} itemText={item.name} scssName={item.scssName}/> )
                }
            </ul>
            <LangSelect />
        </nav>
    )
}

export default Nav;