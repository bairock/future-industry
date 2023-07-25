import { View, StyleSheet } from 'react-native'

const HorizontalLine = ({ width = '100%' }) => {
    return (
        <View style={[styles.horizontalLine, { width }]} />
    )
}

const styles = StyleSheet.create({
    horizontalLine: {
        borderColor: '#fff',
        borderBottomWidth: 1,
        marginTop: 6,
        marginBottom: 18
    }
})

export default HorizontalLine