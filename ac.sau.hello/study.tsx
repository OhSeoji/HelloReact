import React from 'React';
import {View, Text, StyleSheet} from 'react-native';

export default class Study extends React.Component {
    render() {
        return(
            <View style={styles.conatiner}>
                <Text>수업</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'center',
        backgroundColor: '#ff6663'
    }
});