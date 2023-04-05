import styled from "styled-components";
import { SideNav } from "../../components";
import { Outlet } from "react-router-dom";

const Dash = ()=>{
    return(
        <Cont>
            <SideNav/>
            <Hold>
                <Outlet/>
            </Hold>
        </Cont>
    )
}
export default Dash
const Cont=styled.div``
const Hold=styled.div`
display:flex;
justify-content:flex-end;
`