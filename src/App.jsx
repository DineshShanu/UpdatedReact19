// import DerivedStateChallenge from "./components/DerivedStateChallenge";
// import LiftStateUp from "./components/LiftStateUp";
// import IncrementDecrementUseState from "./hooks/useStateHook/IncrementDecrementUseState";
// import Registration from "./hooks/useStateHook/Registration";
// import HowNotToFetchApi from "./hooks/useEffectHook/HowNotToFetchApi";
// import UseRef from "./hooks/useRefs";
// import Pokemon from "./projects/Pokemon/pokemon";
// import ContactForm from "./hooks/useStateHook/ContactForm";
// import LoginForm from "./hooks/useStateHook/LoginForm";
// import RegistrationFormReact from "./hooks/useStateHook/RegistrationFormReact";
// import Todo from "./projects/Todo/Todo";
// import ToggleSwithch from "./projects/ToggleSwithch/ToggleSwithch";
// import EventPropagation from "./components/EventPropagation";
// import EventProps from "./components/EventProps";
// import NetflixSeries from "./components/NetflixSeries";
// import PropDrilling from "./components/PropDrilling";
// import { BioProvider } from "./hooks/contextAPI";
// import Home from "./hooks/contextAPI/Home";
// import { DarkLight, ThemeProvider } from "./hooks/contextAPI/DarkLight";
// import ReducerComp from "./hooks/useReducer";

// import ParentReactMemoComponent from "./hooks/memo/ReactMemoExample";
// import UseCallback from "./hooks/useCallback/UseCallback";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movie from "./pages/Movie";

//import UseMemoExample from "./hooks/memo/useMemoExample";

// import ReactMemo from "./hooks/memo/ReactMemo";
// import MemoParentComponent from "./hooks/memo/UseMemo";

// import { UseId } from "./hooks/useID/Index";
// import { ForwardRefs } from "./hooks/useRefs/forwardRef";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/movie",
      element: <Movie />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <>
      {/* <NetflixSeries /> */}
      {/* <EventProps/> */}
      {/* <EventPropagation /> */}
      {/* <DerivedStateChallenge /> */}
      {/* <LiftStateUp /> */}
      {/* <ToggleSwithch /> */}
      {/* <Todo /> */}
      {/* <IncrementDecrementUseState /> */}
      {/* <Registration/> */}
      {/* <RegistrationFormReact /> */}
      {/* <LoginForm /> */}
      {/* <ContactForm/> */}
      {/* <HowNotToFetchApi /> */}
      {/* <Pokemon /> */}
      {/* <UseRef/> */}
      {/* <ForwardRefs /> */}
      {/* <UseId /> */}
      {/* <PropDrilling /> */}

      {/* useContextAPI purpose  */}
      {/* <BioProvider>
        <Home />
      </BioProvider> */}
      {/* 
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider> */}

      {/* <ReducerComp /> */}
      {/* <ReactMemo /> */}
      {/* <MemoParentComponent/> */}
      {/* <UseMemoExample /> */}
      {/* <ParentReactMemoComponent /> */}
      <RouterProvider router={router} />
      {/* <UseCallback /> */}
    </>
  );
};

export default App;
