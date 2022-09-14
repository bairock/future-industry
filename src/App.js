import { useRef } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native'
import { useMediaQuery } from 'react-responsive'

import Header from './Components/Header'
import Footer from './Components/Footer'

const VerticalLine = ({ text }) => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' })

  return (
    <View style={[styles.verticalView, isPortrait ? { marginRight: 6 } : null]}>
      <View style={styles.verticalLine} />
      <Text tex style={[styles.verticalText, isPortrait ? { fontSize: 18 } : null]}>{text}</Text>
    </View>
  )
}

const HorizontalLine = ({ width = '100%' }) => {
  return (
    <View style={[styles.horizontalLine, { width }]} />
  )
}

const ProjectItem = ({ title, image }) => {
  return (
    <View style={styles.projectView}>
      <Image resizeMode='cover' style={styles.projectImage} source={{ uri: image }} />
      <View style={styles.projectTitleWrap}>
        <Text style={styles.projectTitle}>{title}</Text>
      </View>
    </View>
  )
}

const PartnerItem = () => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' })

  return (
    <View style={isPortrait ? { marginBottom: 24 } : null}>
      <Image style={styles.partnerImage} resizeMode='contain' source={{ uri: 'https://www.timacad.ru/uploads/media/cache/full_image/uploads/images/20220127/1643278224_huge_39e65a5d_1b62_4251_9934_15aceda76ef5.jpg' }} />
      <View style={styles.partnerTitleWrap}>
        <Text style={styles.partnerTitle}>Точка Кипения</Text>
      </View>
      <View style={styles.partnerSubtitleWrap}>
        <Text style={styles.partnerSubtitle}>Якутск</Text>
      </View>
    </View>
  )
}

const CommandItem = () => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' })

  return (
    <View style={isPortrait ? { marginBottom: 24 } : null}>
      <Image style={styles.commandImage} resizeMode='contain' source={{ uri: 'https://sun9-8.userapi.com/impg/cQVUE-YO7H0G8bFLJiQReTxd9MJnZMEuy9fXdQ/PlRrlcOjpO0.jpg?size=1333x1334&quality=96&sign=16ae19092bed67b45310639ab80d2cf7&type=album' }} />
      <View style={styles.commandTitleWrap}>
        <Text style={styles.commandTitle}>Иван Степанов</Text>
      </View>
      <View style={[styles.commandSubtitleWrap, isPortrait ? { marginBottom: 6 } : null]}>
        <Text style={styles.commandSubtitle}>Директор</Text>
      </View>
      <View style={styles.contactWrap}>
        <Text style={styles.contact}>+7 (914) 000 00 00</Text>
      </View>
    </View>
  )
}


const defaultImage = 'https://sk.skolkovo.ru/img/b0914155-287b-4f47-bc05-0de01fb17246/matthew-henry-vviftdjakyk-unsplash.jpg?fm=jpg&q=80&fit=crop&crop=5760%2C3840%2C0%2C0&w=1200&h=600'

const missionText = 'Мы предоставляем услуги в сфере социального, образовательного, информационного и организационного развития граждан, поддержки и продвижения общественно значимых проектов и стратегических инициатив, общественного, научно-технического и технологического прогресса, внедрения новых форматов взаимодействия представителей государственных и муниципальных органов, бизнессообществ, некоммерческого сектора, научных кругов, экспертов и граждан.'

const commandText = 'Команда единомышленников и профессионалов, имеющих общие ценности и видение, способных решать задачи любой сложности, ориентированных на высокий результат. Команда прогрессивно мыслящих и осознанных людей, с сильной мотивацией, высокими идеалами и нравами. Командная работа основана на доверительном и взаимовыгодном партнерстве.'

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
        <View ref={project} style={[styles.blockView, isPortrait ? { marginBottom: 72 } : null]}>
          <VerticalLine text='Ключевые проекты' />
          <View style={{ flexDirection: isPortrait ? 'column' : 'row', flex: 1 }}>
            <View style={{ marginRight: 24, flex: 1 }}>
              <ProjectItem image={defaultImage} title='Пространство коллективной работы «Точка кипения - Якутск».' />
              <ProjectItem image={defaultImage} title='Сеть пространств развития «Ситим».' />
            </View>
            <View style={{ flex: 1, marginRight: isPortrait ? 24 : 0 }}>
              <ProjectItem image={defaultImage} title='Стратегическая инициатива «Новая модель села».' />
              <ProjectItem image={defaultImage} title='Микрополис – территория будущего. ' />
            </View>
          </View>
        </View>
        <View ref={partner} style={[styles.blockView, isPortrait ? { marginBottom: 72 } : null]}>
          <VerticalLine text='Партнерство' />
          <View style={{ flex: 1, marginRight: isPortrait ? 24 : 0 }}>
            <View style={{ flexDirection: isPortrait ? 'column' : 'row', marginBottom: isPortrait ? 0 : 48, justifyContent: 'space-evenly', alignItems: isPortrait ? 'center' : 'baseline' }}>
              <PartnerItem />
              <PartnerItem />
              <PartnerItem />
              <PartnerItem />
            </View>
            <View style={{ flexDirection: isPortrait ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: isPortrait ? 'center' : 'baseline' }}>
              <PartnerItem />
              <PartnerItem />
              <PartnerItem />
            </View>
          </View>
        </View>
        <View ref={command} style={[styles.blockView, isPortrait ? { marginBottom: 72 } : null]}>
          <VerticalLine text='Команда' />
          <View style={{ flex: 1 }}>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Команда организации:</Text>
            </View>
            <HorizontalLine width={isPortrait ? width - 50 : '100%'} />
            <Text style={[styles.commandText, isPortrait ? { fontSize: 18, marginBottom: 60, maxWidth: width - 50 } : null]}>{commandText}</Text>
            <View style={{ flexDirection: isPortrait ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: isPortrait ? 'center' : 'baseline', marginRight: isPortrait ? 24 : 0 }}>
              <CommandItem />
              <CommandItem />
              <CommandItem />
              <CommandItem />
            </View>
          </View>
        </View>
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
  horizontalLine: {
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 6,
    marginBottom: 18
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
    marginBottom: 24
  },
  partnerImage: {
    width: 210,
    height: 210,
    borderRadius: 105,
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
  },
  commandText: {
    fontFamily: 'Jost',
    fontWeight: '500',
    fontSize: 24,
    color: '#fff',
    marginBottom: 120,
  },
  commandImage: {
    width: 234,
    height: 234,
    borderRadius: 117,
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
  contact: {
    fontFamily: 'Jost',
    fontWeight: '500',
    fontSize: 12,
    color: '#8D8D8D',
  },
  contactWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24
  },
})


export default App;
