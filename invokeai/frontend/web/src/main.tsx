import ReactDOM from 'react-dom/client';

import InvokeAIUI from './app/components/InvokeAIUI';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<InvokeAIUI apiUrl="https://relay.hexadecilab.com" forwardTo='192.168.0.1' />);
