import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const StreamIcon = (props) => (
    <Svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            x={1}
            y={4}
            width={20}
            height={14}
            rx={2}
            stroke="#fafafa"
            strokeWidth={1}
        />
        <Path
            d="m9.777 7.518 4.599 3.066a.5.5 0 0 1 0 .832l-4.599 3.066A.5.5 0 0 1 9 14.066V7.934a.5.5 0 0 1 .777-.416Z"
            fill="#fafafa"
        />
    </Svg>
)

export default StreamIcon