import { Icon } from '@iconify/react';
import { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

interface Props {
  children: ReactElement | ReactElement[];
  hasBackButton?: boolean;
}

const AuthenticationFrame = ({ children, hasBackButton }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full">
        <div className="relative flex justify-center">
          {hasBackButton && <Link to={'/login'}>
            <Icon className="absolute top-1/2 left-0 hover:shadow" icon="dashicons:arrow-left-alt2" width="30" />
          </Link>}
          <Logo className="w-60 h-60" />
        </div>
        <h1 className="flex justify-center content-center text-xl mb-4">EASYCOOK</h1>
        {children}
      </div>
    </div>
  )
}

export default AuthenticationFrame;
