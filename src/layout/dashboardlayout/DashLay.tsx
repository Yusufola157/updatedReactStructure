import styled from "styled-components";
import { DashbOard } from "../../components/blocks/homepageblock";
// import { DashbOard } from "../../components/blocks";
import { Outlet } from "react-router-dom";


const DashLayout=()=>{
    return(
       <Hold>
        <DashbOard/>
        <Cont>
        <Outlet/>
        </Cont>
       </Hold>
    )
}
export default DashLayout;
const Hold=styled.div``
const Cont=styled.div`
display:flex;
justify-content:flex-end;
`