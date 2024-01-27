import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = (props) => {
    return (
        <Svg width={21} height={21} viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M1 7.58824L8 1L15 7.58824L15 17H1L1 7.58824Z"
                stroke={props.color || "#3D444F"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default HomeIcon;
