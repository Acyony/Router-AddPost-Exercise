import React from "react";
import styled from "styled-components";


const UlWrap = styled.div``

const Ul = styled.ul`
list-style: none;
`
const Li = styled.li`
border: 1px solid grey;
width: 40%;
padding: 0.5rem 2rem;
`


export default function AllPosts(props) {
  return (
    <>
    <UlWrap>
      <Ul>
        {props.posts.map((post, index) => (
          <Li key={index + 1}>{post}</Li>
        ))}
      </Ul>
      </UlWrap>
    </>
  );
}
