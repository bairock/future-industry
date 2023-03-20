import { StyleSheet, View, TouchableOpacity, Text, useWindowDimensions } from 'react-native'
import { useMediaQuery } from 'react-responsive'


const Footer = ({ onScrollTo }) => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const { width } = useWindowDimensions()

    return (
        <View style={{ backgroundColor: '#39C0C5', paddingHorizontal: 40 }}>
            <View style={styles.container}>
                <View style={styles.menuContainer}>
                    <View style={{ marginRight: 48 }}>
                        <Text style={styles.title}>Информация</Text>
                        <TouchableOpacity onPress={() => onScrollTo('about')} style={styles.wrap}>
                            <Text style={styles.menuTitle}>О нас</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onScrollTo('project')} style={styles.wrap}>
                            <Text style={styles.menuTitle}>Ключевые проекты</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onScrollTo('partner')} style={styles.wrap}>
                            <Text style={styles.menuTitle}>Партнерство</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onScrollTo('command')} style={styles.wrap}>
                            <Text style={styles.menuTitle}>Команда</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.title}>Контакты</Text>
                        <View style={[styles.wrap, { maxWidth: isPortrait ? width / 1.3 : 'auto' }]}>
                            <Text style={styles.menuSubtitle}>Адрес</Text>
                            <Text style={styles.menuTitle}>Республика Саха (Якутия), город Якутск, проспект Ленина 1, этаж 2</Text>
                        </View>
                        <View style={styles.wrap}>
                            <Text style={styles.menuSubtitle}>Контактный телефон</Text>
                            <Text style={styles.menuTitle}>8 (4112) 25 67 67</Text>
                        </View>
                        <View style={styles.wrap}>
                            <Text style={styles.menuSubtitle}>Электронная почта</Text>
                            <Text style={styles.menuTitle}>anofutureindustry@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.menuSubtitle}>2022 © Все права защищены.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 1366,
        width: '100%',
        alignSelf: 'center',
        paddingVertical: 24
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    title: {
        fontFamily: 'Jost',
        fontWeight: '500',
        fontSize: 20,
        color: '#191B1D',
        marginBottom: 12
    },
    main: {
        height: 50,
        width: 115,
        alignSelf: 'baseline'
    },
    menuTitle: {
        fontFamily: 'Jost',
        fontWeight: '500',
        fontSize: 16,
        color: '#191B1D',
    },
    menuSubtitle: {
        fontSize: 14,
        opacity: 0.8,
        fontFamily: 'Jost',
        fontWeight: '500',
        color: '#191B1D',
    },
    logoContainer: {
        height: 150,
        justifyContent: 'center'
    },
    wrap: {
        marginBottom: 12
    }
})

export default Footer