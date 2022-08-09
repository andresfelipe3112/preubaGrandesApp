import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = (props) => (
    <Svg
        width={26}
        height={26}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M13 12c2.761 0 5-2.015 5-4.5S15.761 3 13 3 8 5.015 8 7.5s2.239 4.5 5 4.5ZM5.02 22s-.809-7 7.949-7c8.757 0 8.015 7 8.015 7H5.02Z"
            stroke="#fff"
            strokeMiterlimit={10}
        />
    </Svg>
);

export default ProfileIcon;
