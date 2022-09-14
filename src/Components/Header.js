import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useMediaQuery } from 'react-responsive'

import Logo from '../Assets/ano.png'

const Header = ({ onScrollTo }) => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

    return (
        <View style={[styles.container, isPortrait ? { overflowX: 'scroll', paddingLeft: 24 } : null]}>
            <View style={styles.menuView}>
                <TouchableOpacity onPress={() => onScrollTo('main')}>
                    <Image resizeMode='contain' style={styles.icon} source={Logo} />
                </TouchableOpacity>
                <View style={styles.containerMenu}>
                    <TouchableOpacity onPress={() => onScrollTo('about')} style={styles.textMenuWrap}>
                        <Text style={styles.textMenu}>О нас</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onScrollTo('project')} style={styles.textMenuWrap}>
                        <Text style={styles.textMenu}>Проекты</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onScrollTo('partner')} style={styles.textMenuWrap}>
                        <Text style={styles.textMenu}>Партнерство</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onScrollTo('command')} style={styles.textMenuWrap}>
                        <Text style={styles.textMenu}>Команда</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        backgroundColor: '#1B1D20',
        position: 'fixed',
        width: '100%'
    },
    menuView: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 1366,
        alignSelf: 'center',
    },
    icon: {
        height: 120,
        width: 150,
        marginRight: 25
    },
    containerMenu: {
        flexDirection: 'row'
    },
    textMenu: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '500'
    },
    textMenuWrap: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12
    },
    button: {
        alignSelf: 'center',
        height: 40,
        borderColor: '#4a0a52',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginLeft: 40
    },
    buttonText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 14
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25
    }
})

export default Header