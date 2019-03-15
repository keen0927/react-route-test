import React from 'react';

const InnovationChildren = ({match}) => {

    const imageSrc = '//image.goodchoice.kr/images/30/project/project-' + match.params.name +'-2018.png';

    return (
        <div>
            <p>{match.params.name}</p>
            <img src={imageSrc} alt=""/>
        </div>
    );
};

export default InnovationChildren;