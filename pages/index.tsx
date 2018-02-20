import * as React from 'react';
import { hydrate } from 'react-emotion';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
export interface HydrateWindow extends Window {
  __NEXT_DATA__: {
    ids: string[];
  }
}
if (typeof window !== 'undefined') {
  hydrate((window as HydrateWindow).__NEXT_DATA__.ids)
}

export default () => {
  return (
    <div>
      Hello World
    </div>
  )
}
