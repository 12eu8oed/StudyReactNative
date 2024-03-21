import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";

class WeatherProject extends Component {
    constructor(props) {
        super(props);
        this.state = { zip: "" };
    }

    _handleTextChange = event => {
        this.setState({
            zip: event.nativeEvent.text
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}
                </Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this._handleTextChange}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {}
    , welcome : {}
    , input : {} 
});

export default WeatherProject;