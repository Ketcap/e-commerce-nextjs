import { makeSchema, queryField, queryType } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path';
import * as types from './schema';

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({
    experimentalCRUD:true,
    
  })],
  outputs: {
    schema: `${__dirname}/../generated/generated.graphql`,
    typegen: `${__dirname}/../node_modules/@types/nexus-typegen/index.d.ts`
  },
  nonNullDefaults: {
    output: true,
    input:true
  },
  contextType:{
    export:"Context",
    module:path.join(__dirname,'./context.ts'),
  },
  sourceTypes: {
    modules: [{ module: '.prisma/client', alias: 'PrismaClient' }],
  },
})
