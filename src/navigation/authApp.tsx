import React from 'react';
import StackConsumer from './stacks/consumer';
import StackCreator from './stacks/creator';

interface AuthAppProps {
  data: any;
  RootNavigation: any;
}

const AuthApp: React.FC<AuthAppProps> = ({data, RootNavigation}) => {
  if (data?.potentialAction.includes('creator')) {
    //console.log('creator');
    return <StackCreator RootNavigation={RootNavigation} />;
  } else {
    //console.log('consumer');
    return <StackConsumer RootNavigation={RootNavigation} />;
  }
};
export default AuthApp;
