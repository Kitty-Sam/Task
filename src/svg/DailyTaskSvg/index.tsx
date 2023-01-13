import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const DailyTaskSvg = (props: any) => (
    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
            d="M3.542 3.958h-.417a.833.833 0 0 0-.833.834v11.666a.833.833 0 0 0 .833.834h13.75a.833.833 0 0 0 .833-.834V4.792a.833.833 0 0 0-.833-.834h-.417m-2.5 0H6.042m9.166 1.25v-2.5m-10.416 2.5v-2.5"
            stroke="#888888"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.37 13.037a2.91 2.91 0 0 0 4.54-2.412m-1.283-2.413a2.91 2.91 0 0 0-4.537 2.413"
            stroke="#888888"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12.46 10.625h-1.093l1.504-1.504 1.504 1.504h-1.914Zm-4.92 0h1.093L7.129 12.13l-1.504-1.504h1.914v0Z"
            stroke="#888888"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
