import React from 'react';
import Posting from './Posting';
import Responsive from './comfunc/Responsive';

function WritePage(props) {
    return (
        <Responsive>
            <Posting/>
        </Responsive>
    );
}

export default WritePage;