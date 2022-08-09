import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const MenuIcon = (props) => (
    <Svg
        width={26}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#a)" stroke="#fff" strokeLinecap="round">
            <Path d="M18.597 9.364H2M13.294 15.314H2M23.218 3.314H2" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h26v21H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default MenuIcon;
