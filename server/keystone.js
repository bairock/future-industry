import { config } from '@keystone-6/core'
import { createAuth } from '@keystone-6/auth'
import { statelessSessions } from '@keystone-6/core/session'
import { lists } from './schema'

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    skipKeystoneWelcome: true,
  },
})

const session = statelessSessions({
  secret: '1c1211e729984bcaa231d12f07b4195d',
})

export default withAuth(
  config({
    server: {
      port: 4001
    },
    graphql: {
      path: '/graphql'
    },
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    lists,
    session,
    storage: {
      local: {
        kind: 'local',
        type: 'image',
        generateUrl: path => `http://localhost:4001/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'images',
      },
    },
  })
)