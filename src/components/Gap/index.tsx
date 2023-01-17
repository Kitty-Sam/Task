import React, { FC } from 'react';
import { View } from 'react-native';

import { GapStyleType } from '~components/Gap/type';

export const Gap: FC<GapStyleType> = ({ size }) => {
    return <View style={{ height: 10 * size }} />;
};
