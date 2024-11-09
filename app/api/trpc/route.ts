import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/server/index';

export default createNextApiHandler({
  router: appRouter,
});
