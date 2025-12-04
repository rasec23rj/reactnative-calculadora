import React from 'react'
import { Text, Dimensions, TouchableHighlight, StyleSheet } from 'react-native'


export default props => {
    const styleButton = [styles.button]
    if(props.double) styleButton.push(styles.buttonDouble)
    if(props.triple) styleButton.push(styles.buttonTriple)
    if(props.operation) styleButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)} 
        activeOpacity={0.6}
        underlayColor="#DDDDDD"  >
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'

    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2 ,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3 ,
    }
});