import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FavouriteIcon = (props) => (
    <Svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M20.223 19.723v-5.248h.277V20.5h-6.025v-.277h5.748v-.5ZM2.277 20.223h5.249v.277H1.5v-6.025h.277v5.748h.5ZM19.723 1.777h-5.248V1.5H20.5v6.026h-.277v-5.75h-.5ZM1.777 2.277v5.249H1.5V1.5h6.026v.277h-5.75v.5Z"
            fill="#fff"
            stroke="#fff"
        />
        <Path
            clipRule="evenodd"
            d="M6.03 7.032a3.508 3.508 0 0 1 4.97 0 3.508 3.508 0 0 1 4.97 0 3.531 3.531 0 0 1 0 4.984l-3.811 3.822a1.636 1.636 0 0 1-2.318 0L6.03 12.016a3.53 3.53 0 0 1 0-4.984Z"
            stroke="#fff"
        />
    </Svg>
);

export default FavouriteIcon;
