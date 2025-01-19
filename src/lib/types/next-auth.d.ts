import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface ExtendedJWT extends JWT {
  accessToken?: string;
  provider?: string;
}

interface ExtendedSession extends Session {
  accessToken?: string;
  provider?: string;
}
