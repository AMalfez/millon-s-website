import { createContext } from 'react';

const EventContext = createContext<any>(null);
const EventDispatchContext = createContext<any>(null);

export { EventContext, EventDispatchContext };