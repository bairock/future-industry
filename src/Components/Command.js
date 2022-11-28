import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { useQuery, gql } from '@apollo/client'

import VerticalLine from './VerticalLine'
import HorizontalLine from './HorizontalLine'

const GET_PEOPLE = gql`
  {
    people {
      id
      name
      description
      image {
        url
      }
    }
  }
`

const commandText = 'Команда единомышленников и профессионалов, имеющих общие ценности и видение, способных решать задачи любой сложности, ориентированных на высокий результат. Команда прогрессивно мыслящих и осознанных людей, с сильной мотивацией, высокими идеалами и нравами. Командная работа основана на доверительном и взаимовыгодном партнерстве.'

const Command = ({ command }) => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const { width } = useWindowDimensions()
    const { loading, error, data } = useQuery(GET_PEOPLE)

    if (loading) return null
    if (error) return null

    const { people } = data

    return (
        <View ref={command} style={[styles.blockView, isPortrait ? { marginBottom: 72 } : null]}>
            <VerticalLine text='Команда' />
            <View style={{ flex: 1 }}>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Команда организации</Text>
                </View>
                <HorizontalLine width={isPortrait ? width - 50 : '100%'} />
                <Text style={[styles.commandText, isPortrait ? { fontSize: 18, marginBottom: 36, maxWidth: width - 50 } : null]}>{commandText}</Text>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {
                        people.map((object) => (
                            <View style={{ margin: 24 }}>
                                <Image style={styles.commandImage} resizeMode='contain' source={{ uri: object.image.url }} />
                                <View style={styles.commandTitleWrap}>
                                    <Text style={styles.commandTitle}>{object.name}</Text>
                                </View>
                                <View style={[styles.commandSubtitleWrap, isPortrait ? { marginBottom: 6 } : null]}>
                                    <Text style={styles.commandSubtitle}>{object.description}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    blockView: {
        paddingTop: 120,
        flexDirection: 'row',
        marginBottom: 120
    },
    title: {
        fontFamily: 'Jost',
        fontWeight: '400',
        fontSize: 24,
        color: '#fff',
    },
    titleWrap: {
        height: 60,
        justifyContent: 'center',
    },
    commandText: {
        fontFamily: 'Jost',
        fontWeight: '500',
        fontSize: 24,
        color: '#fff',
        marginBottom: 120,
    },
    commandImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
        backgroundColor: '#fff'
    },
    commandTitle: {
        fontFamily: 'Jost',
        fontWeight: '500',
        fontSize: 18,
        color: '#fff',
    },
    commandTitleWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 24,
        marginBottom: 6
    },
    commandSubtitle: {
        fontFamily: 'Jost',
        fontWeight: '500',
        fontSize: 12,
        color: '#fff',
    },
    commandSubtitleWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
        marginBottom: 12
    },
})

export default Command