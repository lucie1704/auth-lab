import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface ExtendedJWT extends JWT {
  accessToken?: string;
}

interface ExtendedSession extends Session {
  accessToken?: string;
}
