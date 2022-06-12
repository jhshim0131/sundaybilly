import React from 'react';
import styled from "styled-components";

const ResBlock = styled.div`
padding-left: 1rem;
padding-right: 1rem;
width: 1024px;
margin: 0 auto;

@media (max-width:1024px){
    width: 768px;
}
@media (max-width:768px){
    width: 100%;
}`;


function Responsive({children,...rest}) {
    return (
<<<<<<< HEAD
        <ResBlock {...rest}> {children}</ResBlock>
=======
        <ResBlock {...rest}>{children}</ResBlock>
>>>>>>> origin/post/slide

        );
}

export default Responsive;