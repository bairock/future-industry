import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { useQuery, gql } from '@apollo/client'

import VerticalLine from './VerticalLine'
import HorizontalLine from './HorizontalLine'

const GET_PROJECTS = gql`
  {
    projects {
      id
      name
      image {
        url
      }
    }
  }
`

const Projects = ({ project }) => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const { width } = useWindowDimensions()
    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return null
    if (error) return null

    const { projects } = data

    return (
        <View ref={project} style={[styles.blockView, isPortrait ? { marginBottom: 72 } : null]}>
            <VerticalLine text='Ключевые проекты' />
            <View style={{ flex: 1 }}>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Ключевые проекты</Text>
                </View>
                <HorizontalLine width={isPortrait ? width - 50 : '100%'} />
                <View style={{ flexDirection: isPortrait ? 'column' : 'row', flex: 1, justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 36 }}>
                    {
                        projects.map((object) => (
                            <View key={object.id} style={[styles.projectView, isPortrait ? { width: 'auto' } : null]}>
                                <Image resizeMode='cover' style={styles.projectImage} source={{ uri: object.image.url }} />
                                <View style={styles.projectTitleWrap}>
                                    <Text style={styles.projectTitle}>{object.name}</Text>
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
    projectImage: {
        height: 400,
        width: '100%'
    },
    projectTitle: {
        fontFamily: 'Jost',
        fontWeight: '500',
        fontSize: 18,
        color: '#fff',
    },
    projectTitleWrap: {
        height: 36,
        justifyContent: 'center',
        marginTop: 12
    },
    projectView: {
        marginBottom: 24,
        width: 550
    }
})

export default Projects