import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'

import {
  text,
  password,
  timestamp,
  image
} from '@keystone-6/core/fields'

export const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),
  Person: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      description: text({ validation: { isRequired: true } }),
      image: image({ storage: 'local', validation: { isRequired: true } }),
    },
  }),
  Project: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      image: image({ storage: 'local', validation: { isRequired: true } }),
    },
  }),
  Partner: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      description: text({ validation: { isRequired: true } }),
      image: image({ storage: 'local', validation: { isRequired: true } }),
    },
  }),
};
