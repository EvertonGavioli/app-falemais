import React from 'react';
import ReactDOM from 'react-dom';

import App from '~/App';

describe('Teste App', () => {
  it('Deve renderizar corretamete a aplicação', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
