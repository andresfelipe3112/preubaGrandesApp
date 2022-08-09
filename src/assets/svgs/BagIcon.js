import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BagIcon = (props) => (
    <Svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M16.69 5.901h1.499l1.583 14.88H2.228L3.807 5.9h2.76M8.25 5.901h6.773"
            stroke="#fff"
            strokeMiterlimit={10}
            strokeLinecap="square"
        />
        <Path
            d="M6.586 7.585V3.57c0-.308.057-.613.166-.898.11-.285.27-.543.471-.761a2.17 2.17 0 0 1 .705-.51c.264-.117.546-.178.832-.178h4.11a2.095 2.095 0 0 1 1.534.69c.407.44.635 1.036.635 1.657v4.014"
            stroke="#fff"
            strokeMiterlimit={10}
            strokeLinecap="square"
        />
    </Svg>
);

export default BagIcon;
