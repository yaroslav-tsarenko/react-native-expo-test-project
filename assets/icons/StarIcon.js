import React from 'react';
import Svg, { Path } from 'react-native-svg';

const StarIcon = (props) => {
    return (
        <Svg width={21} height={21} viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M9 13.4444L3.66667 16.1111L5 10.7778L1 6.33333L6.77778 5.88889L9 1L11.2222 5.88889L17 6.33333L13 10.7778L14.3333 16.1111L9 13.4444Z"
                stroke={props.color || "white"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default StarIcon;
