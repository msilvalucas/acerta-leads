import React from 'react';

const withProvider = <P extends object>(
  Component: React.ComponentType<P>,
  Provider: React.ComponentType<{ children: React.ReactNode }>,
): React.FC<P> => {
  return (props: P) => (
    <Provider>
      <Component {...props} />
    </Provider>
  );
};

export default withProvider;
