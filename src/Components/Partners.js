import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { useQuery, gql } from '@apollo/client'

import VerticalLine from './VerticalLine'
import HorizontalLine from './HorizontalLine'

const GET_PARTNERS = gql`
  {
    partners {
      id
      name
      description
      image {
        url
      }
    }
  }
`

const Partners = ({ partner }) => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const { width } = useWindowDimensions()
    const { loading, error, data } = useQuery(GET_PARTNERS)

    if (loading) return null
    if (error) return null

    const { partners } = data

    return (
        <View ref={partner} style={[styles.blockView, isPortrait ? { marginBottom: 72 } : null]}>
            <VerticalLine text='Партнеры' />
            <View style={{ flex: 1 }}>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Партнеры</Text>
                </View>
                <HorizontalLine width={isPortrait ? width - 50 : '100%'} />
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {
                        partners.map((object) => (
                            <View style={[{ alignItems: 'center', margin: 24 }]}>
                                <Image style={styles.partnerImage} resizeMode='contain' source={{ uri: object.image.url }} />
                                <View style={styles.partnerTitleWrap}>
                                    <Text style={styles.partnerTitle}>{object.name}</Text>
                                </View>
                                <View style={styles.partnerSubtitleWrap}>
                                    <Text style={styles.partnerSubtitle}>{object.description}</Text>
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
    partnerImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
        backgroundColor: '#fff'
    },
    partnerTitle: {
        fontFamily: 'Jost',
        fontWeight: '500',
        fontSize: 18,
        color: '#fff',
    },
    partnerTitleWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
        marginVertical: 12
    },
    partnerSubtitle: {
        fontFamily: 'Jost',
        fontWeight: '500',
        fontSize: 12,
        color: '#8D8D8D',
    },
    partnerSubtitleWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 24
    }
})

export default Partners