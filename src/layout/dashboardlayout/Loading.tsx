import styled from "styled-components";

const Loading = ()=>{
    return(
        <Cont>
            <h1>LoADING...</h1>
        </Cont>
    )
}
export default Loading
const Cont=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
background-color:green;
`
