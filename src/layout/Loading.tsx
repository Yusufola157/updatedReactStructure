import styled from "styled-components";

const Loading=()=>{
    return(
        <Cont>
            <h5>loading...</h5>
        </Cont>
    )
}
export default Loading;
const Cont=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    background-color:gray;
`