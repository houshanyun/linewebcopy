import { useState } from "react";
import { v4 } from "uuid";
const LangSelect = () => {
    const langs = ["TW", "JP", "EN"];
    const [lang, setLang] = useState("TW");
    const [block, setBlock] = useState(false)
    function toBlock() { setBlock(!block) }
    function selectLang(e) {
        // e.stopPropagation(); //阻止冒泡
        setLang(e.target.innerHTML)
    }
    return (
        <div className="lang" onClick={ toBlock }>
            <span>{ lang }</span>
            { block &&
                <div className="langItem">
                    { langs.map( (item, id=v4()) => <span key={ id } onClick={ selectLang }>{ item }</span>) }
                </div>
            }

        </div>

    )
}


export default LangSelect;