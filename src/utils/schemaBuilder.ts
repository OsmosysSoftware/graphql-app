import SchemaBuilder from "@pothos/core";
import prisma from "./PrismaClient.js";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated.js";
import RelayPlugin from "@pothos/plugin-relay";

const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {},
  prisma: {
    client: prisma,
    filterConnectionTotalCount: true,
  },
});

export default builder;
