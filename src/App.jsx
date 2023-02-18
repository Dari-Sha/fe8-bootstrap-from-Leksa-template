import React, {useState} from "react"; 
import BootstrapPage from "./components/BootstrapPage";
import MuiPage from "./components/MuiPage";
import {Button, Container, Tab} from "react-bootstrap";
import Tabs from "./components/Tabs";

export default () => {
    const [home, setHome] = useState(true);
    const changePage = e => {
        setHome(!home);
    }
    return <>
    <Container className="menu py-3 mb-2">
        <Button disabled={home ? true : false} onClick={changePage}>Bootstrap</Button>
        <Button disabled={home ? false : true} onClick={changePage}>MUI</Button>
    </Container>
    <Tabs/>
    {home && <BootstrapPage/>}
    <Container>
    {!home && <MuiPage/>}
    </Container>
    </>
}