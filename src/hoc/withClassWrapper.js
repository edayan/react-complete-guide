import React from 'react';

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;

/**
 * in App.js use as follows:
 * export default withClass(App, classes.app);
 */