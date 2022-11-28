import { useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import { useMediaQuery } from 'react-responsive'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Partners from './Components/Partners'
import Command from './Components/Command'
import VerticalLine from './Components/VerticalLine'
import HorizontalLine from './Components/HorizontalLine'

const missionText = 'Мы предоставляем услуги в сфере социального, образовательного, информационного и организационного развития граждан, поддержки и продвижения общественно значимых проектов и стратегических инициатив, общественного, научно-технического и технологического прогресса, внедрения новых форматов взаимодействия представителей государственных и муниципальных органов, бизнессообществ, некоммерческого сектора, научных кругов, экспертов и граждан.'

const App = () => {
  const main = useRef(null)
  const about = useRef(null)
  const project = useRef(null)
  const partner = useRef(null)
  const command = useRef(null)
  const { height, width } = useWindowDimensions()
  const isPortrait = useMediaQuery({ orientation: 'portrait' })

  const onScrollTo = (name) => {
    switch (name) {
      case 'main':
        main.current.scrollIntoView({ behavior: 'smooth' })
        return
      case 'about':
        about.current.scrollIntoView({ behavior: 'smooth' })
        return
      case 'project':
        project.current.scrollIntoView({ behavior: 'smooth' })
        return
      case 'partner':
        partner.current.scrollIntoView({ behavior: 'smooth' })
        return
      case 'command':
        command.current.scrollIntoView({ behavior: 'smooth' })
        return
      default:
        return
    }
  }

  return (
    <View>
      <Header onScrollTo={onScrollTo} />
      <View ref={main} style={styles.container}>
        <View style={[styles.welcomeView, { height }]}>
          <View style={[styles.welcomeTitleWrap, isPortrait ? { height: 'auto', marginHorizontal: 24 } : null]}>
            <Text style={[styles.welcomeTitle, isPortrait ? { fontSize: 48 } : null]}>«Индустрия будущего»</Text>
          </View>
          <View style={[styles.welcomeSubtitleWrap, isPortrait ? { height: 'auto', marginHorizontal: 24 } : null]}>
            <Text style={[styles.welcomeSubtitle, isPortrait ? { fontSize: 24 } : null]}>Автономная некоммерческая организация по поддержке стратегических<br />инициатив «Индустрия будущего».</Text>
          </View>
          <TouchableOpacity accessibilityRole='link' href='https://wa.me/79854353593' target='_blank' style={[styles.welcomeButtonView, isPortrait ? { width: 'auto', marginHorizontal: 24, height: 46, borderRadius: 23 } : null]}>
            <Text style={[styles.welcomeButtonText, isPortrait ? { fontSize: 18, marginHorizontal: 24 } : null]}>Обсудить проект</Text>
          </TouchableOpacity>
        </View>
        <View ref={about} style={[styles.blockView, isPortrait ? { marginBottom: 72 } : null]}>
          <VerticalLine text='О нас' />
          <View>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Миссия</Text>
            </View>
            <HorizontalLine width={isPortrait ? width - 50 : 300} />
            <Text style={[styles.missionText, isPortrait ? { maxWidth: width - 50, marginRight: 0, fontSize: 20 } : null]}>Мы содействуем обществу в переходе на новый технологический<br />уклад жизни.</Text>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Об организации:</Text>
            </View>
            <HorizontalLine width={isPortrait ? width - 50 : 300} />
            <Text style={[styles.missionText, isPortrait ? { maxWidth: width - 50, fontSize: 20 } : null]}>{missionText}</Text>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Направления деятельности:</Text>
            </View>
            <HorizontalLine width={isPortrait ? width - 50 : 300} />
            <View style={[styles.directionsView, isPortrait ? { flexDirection: 'column' } : null]}>
              <View>
                <Text style={[styles.directionText, isPortrait ? { fontSize: 18, maxWidth: width - 50, marginRight: 0 } : null]}> •  Развитие территорий</Text>
                <Text style={[styles.directionText, isPortrait ? { fontSize: 18, maxWidth: width - 50, marginRight: 0 } : null]}> •  Развитие сообществ</Text>
                <Text style={[styles.directionText, isPortrait ? { fontSize: 18, maxWidth: width - 50, marginRight: 0 } : null]}> •  Создание пространст для развития территорий</Text>
              </View>
              <View>
                <Text style={[styles.directionText, isPortrait ? { fontSize: 18, maxWidth: width - 50, marginRight: 0 } : null]}> •  Волонтерство</Text>
                <Text style={[styles.directionText, isPortrait ? { fontSize: 18, maxWidth: width - 50, marginRight: 0 } : null]}> •  Социо-культурное проектирование</Text>
              </View>
            </View>
          </View>
        </View>
        <Projects project={project} />
        <Partners partner={partner} />
        <Command command={command} />
      </View>
      <Footer onScrollTo={onScrollTo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 1366,
    alignSelf: 'center'
  },
  welcomeView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeTitle: {
    textAlign: 'center',
    fontFamily: 'Jost',
    fontWeight: '500',
    fontSize: 96,
    color: '#fff'
  },
  welcomeTitleWrap: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeSubtitle: {
    textAlign: 'center',
    fontFamily: 'Jost',
    fontWeight: '500',
    fontSize: 30,
    color: '#fff',
  },
  welcomeSubtitleWrap: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24
  },
  welcomeButtonView: {
    height: 90,
    width: 480,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeButtonText: {
    fontFamily: 'Jost',
    fontWeight: '500',
    fontSize: 36,
    color: '#fff',
  },
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
  missionText: {
    fontFamily: 'Jost',
    fontWeight: '500',
    fontSize: 24,
    color: '#fff',
    marginBottom: 60,
    maxWidth: 1012,
  },
  directionsView: {
    flexDirection: 'row'
  },
  directionText: {
    fontFamily: 'Jost',
    fontWeight: '500',
    fontSize: 24,
    color: '#fff',
    marginBottom: 24,
    marginRight: 24,
  },
})

export default App;
