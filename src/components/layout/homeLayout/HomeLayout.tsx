import React from 'react';
import { Footer, Header } from '../../blocks';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HomeLayout = () => {
  return (
    <Cont>
            <Header />
            <Hold>
            <Outlet />
            </Hold>
            {/* <Footer /> */}
    </Cont>
  )
}
const Cont = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`
const Hold = styled.div`
  display: flex;
  justify-content: flex-end;
`
export default HomeLayout