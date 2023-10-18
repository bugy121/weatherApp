import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { weatherConditions } from '../utils/weatherConditions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types'

const Weather = ({weather,temp}) =>{
    return (
        <View style={[styles.weatherContainer,
        {backgroundColor: weatherConditions[weather].color}]}>
            <View style={styles.headerContainer}>
                <MaterialCommunityIcons/>
                <Text>{temp}˚</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text>{weatherConditions[weather].title}</Text>
                <Text>{weatherConditions[weather].subtitle}</Text>
            </View>
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weather: PropTypes.string
}

const styles = StyleSheet({
    container: {
        flex: 1
    },
    headerContainer: {},
    bodyContainer: {}
})

export default Weather;