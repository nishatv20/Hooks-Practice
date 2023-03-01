import logo from './logo.svg';
import './App.css';
import React from 'react'
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import DummyPrac from './components/DummyPrac';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import ParentComponent from './components/ParentComponent';
import FocInput from './components/FocInput';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
    <FocInput/>
      {/* <ParentComponent/> */}

    {/* <UserContext.Provider value = {'Nishat'}>
      <ChannelContext.Provider value ={'Codevolution'}>
      <ComponentC/>
      </ChannelContext.Provider>
    
    </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <DummyPrac /> */}
      {/* <HookMouse/> */}
     {/* <HookCounterOne/> */}
     {/* <HookCounterFour/> */}
      {/* <HookCounterTwo/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
    </div>
  );
}

export default App;
