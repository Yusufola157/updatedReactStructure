import React from 'react';
import {useQuery, useMutation} from "@tanstack/react-query";
import { fetchDictionary, postUser } from '../utils/api';
import { iUser } from '../types';
import styled from 'styled-components';

const Home = () => {

    const {data} = useQuery({
        queryKey: ["dictionary"],
        queryFn: fetchDictionary,
    })

    console.log("mydata", data)

    // const id = "geuaiuijkd"
    // const wallet = "snd7wiujrol"

    // const {mutate, isLoading}= useMutation({

    //     mutationFn: (data : iUser) => postUser(data, id, wallet)
    // })

  return (
    <Cont>
        <h4>Home</h4>

        {/* {data?.list?.map((props:any) => (
            <p>{props?.definition}</p>
        ))} */}

    </Cont>
  )
}
export default Home
const Cont = styled.div`
 width: calc(100% - 250px);
 height: 100vh;
 background-color: yellow;
`