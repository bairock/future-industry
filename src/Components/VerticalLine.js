import { View, Text, StyleSheet } from 'react-native'
import { useMediaQuery } from 'react-responsive'

const VerticalLine = ({ text }) => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

    return (
        <View style={[styles.verticalView, isPortrait ? { marginRight: 6 } : null]}>
            <View style={styles.verticalLine} />
            <Text tex style={[styles.verticalText, isPortrait ? { fontSize: 18 } : null]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    verticalView: {
      width: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 120
    },
    verticalLine: {
      borderColor: '#fff',
      borderLeftWidth: 1,
      marginLeft: 7,
      marginBottom: 40,
      flex: 1,
    },
    verticalText: {
      fontFamily: 'Jost',
      fontWeight: '400',
      fontSize: 24,
      color: '#fff',
      writingMode: 'vertical-lr',
      textOrientation: 'mixed',
      transform: 'rotate(180deg)'
    },
  })

  export default VerticalLine