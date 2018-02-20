import * as React from 'react';
import { hydrate } from 'react-emotion';
if (typeof window !== 'undefined') {
    hydrate(window.__NEXT_DATA__.ids);
}
export default () => {
    return (<div>
      Hello World
    </div>);
};
