import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const DoneTaskSvg = (props: any) => (
    <Svg width={17} height={11} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
            d="M11.85 1.175a.833.833 0 0 0-1.175.142l-5.833 7.5-2.859-3.484a.833.833 0 1 0-1.3 1.042l3.475 4.317a.834.834 0 0 0 .65.308.834.834 0 0 0 .692-.317l6.525-8.333a.833.833 0 0 0-.175-1.175Zm4.167 0a.834.834 0 0 0-1.175.142l-5.834 7.5-.508-.625-1.05 1.35.917 1.141a.832.832 0 0 0 1.3-.008l6.525-8.333a.833.833 0 0 0-.175-1.167Z"
            fill="#888"
        />
    </Svg>
);
