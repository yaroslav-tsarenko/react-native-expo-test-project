import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BellIcon = (props) => {
    return (
        <Svg width={21} height={21} viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
                stroke={props.color || "#3D444F"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default BellIcon;
