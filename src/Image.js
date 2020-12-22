import React from 'react';
import FastImage from 'react-native-fast-image'

const Image  = ({src, style ,resizeMode=FastImage.resizeMode.contain}) => {

    var sourceImage = undefined

    if(typeof(src) !== 'string'){
        sourceImage = src
    }else{
        sourceImage = {
            priority: FastImage.priority.normal,
            uri : src
        }
        
    }

    return(
        <FastImage
            style={style}
            source={sourceImage}
            resizeMode={resizeMode}
     />)
}

export {
    Image
} 