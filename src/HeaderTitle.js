import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

import {  
    images,
    colors
} from '../resources';

import
    EStyleSheet
from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    textShowAll : {
        fontSize:"14rem",
        fontWeight: 'bold'
    },
    textLink :{
        color: colors.textLink,
        fontSize: "12rem",
    }
})

class HeaderTitle extends Component {

    static defaultProps = {
        bgColor: 'white',
        title : '',
        style : {},
        textstyle : {},
        textLinkColor:'',
        onViewAll : undefined
    }

    constructor(props){
        super(props);
    }

    render() {   
        return(<View style={[this.props.style,{ 
            backgroundColor: this.props.bgColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }]}>
             <Text style={[styles.textShowAll,this.props.textstyle]}>{this.props.title}</Text>
            {this.props.onViewAll != undefined && (
                <TouchableWithoutFeedback onPress={this.props.onViewAll}>
                    <Text style={styles.textLink}>Lihat Semua</Text>
                </TouchableWithoutFeedback>  
            )}    
        </View>)
    }
}

export { HeaderTitle };
