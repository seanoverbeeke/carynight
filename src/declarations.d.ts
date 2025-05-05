declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module './pages/LandingPage' {
  import { FC } from 'react';
  const LandingPage: FC;
  export default LandingPage;
}

declare module './pages/PaymentPage' {
  import { FC } from 'react';
  const PaymentPage: FC;
  export default PaymentPage;
}

declare module './pages/SuccessPage' {
  import { FC } from 'react';
  const SuccessPage: FC;
  export default SuccessPage;
} 