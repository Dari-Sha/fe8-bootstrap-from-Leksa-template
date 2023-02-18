import React, {useState} from "react";
import {} from "react-bootstrap-icons";
import {Container} from "react-bootstrap";

const data = [
            <p>Lorem ipsum dolor sit amet.</p>,
            <p>Molestiae vel deleniti rem quae.</p>,
            <p>Hic, rem amet. Nihil, sed!</p>,
            <p>Odit ab consequatur reprehenderit architecto!</p>,
            <p>Reiciendis asperiores debitis deleniti dolor!</p>
]

export default () => {
    const names = data.map((el, i) => `Tab ${i+1}`);
    const [active, setActive] = useState(0); 
    const handler = (e) => {}
    return <Container>
        <h2>Вкладочки</h2>
        <Container className="tabs-container">
            <div className="tabs-nav">
                {names.map((el, i) => <button 
                key={i} 
                onClick={e => setActive(i)}
                className={active === i ? "active" : ""}>{el}</button>)}
            </div>
            {data.map((el, i) => <div className="tabs-data" style={{display: active === i ? "block" : "none"}}>
            <h3>{names[i]}</h3>
            {el}
            </div>)}
        </Container>
    </Container>
}