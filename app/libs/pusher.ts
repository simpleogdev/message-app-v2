// import PusherServer from 'pusher'
// import PusherClient from 'pusher-js'

// export const pusherServer = new PusherServer({
//   appId: process.env.PUSHER_APP_ID!,
//   key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
//   secret: process.env.PUSHER_SECRET!,
//   cluster: 'ap',
//   useTLS: true,
// });

// export const pusherClient = new PusherClient(
//   process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
//   {
//     channelAuthorization: {
//       endpoint: '/api/pusher/auth',
//       transport: 'ajax',
//     },
//     cluster: 'ap',
//   }
// );

import Pusher from 'pusher-js';
import PusherServer from 'pusher';

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: 'ap2',
  useTLS: true,
});

export const pusherClient = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
  authEndpoint: '/api/pusher/auth',
  cluster: 'ap2',
  forceTLS: true,
});
