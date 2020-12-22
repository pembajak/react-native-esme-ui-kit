import React from 'react';

import {
    Dimensions
} from 'react-native';

import {
    Header
} from './Header'

import {
    BoxShadow
} from 'react-native-shadow'

import
    EStyleSheet
from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    header: {
        height: "56rem",
    },
})

const HeaderShadow = ({
    navigation,
    children,
    action,
    style,
    leftContainerStyle,
    centerContainerStyle,
    rightContainerStyle,
    leftIcon,
    onLayout,
    rightIcon
}) => {
    const shadowOpt = {
        width: Dimensions.get('window').width,
        height: styles.header.height,
        color: "#566E94",
        border: 4,
        radius: 1,
        opacity: 0.15,
        x: 0,
        y: 2,
    }
    return (
        <BoxShadow setting={shadowOpt}>
            <Header
                navigation={navigation}
                children={children}
                action={action}
                style={style}
                leftContainerStyle={leftContainerStyle}
                centerContainerStyle={centerContainerStyle}
                rightContainerStyle={rightContainerStyle}
                leftIcon={leftIcon}
                onLayout={onLayout}
                rightIcon={rightIcon}>{children}</Header>
        </BoxShadow>
    )
}

export {
    HeaderShadow
}
