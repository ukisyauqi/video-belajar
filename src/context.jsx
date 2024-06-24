import { createContext, useState } from "react";
import { coursesDummyData } from "./utils/data";
export const AppContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [courses, setCourses] = useState(coursesDummyData);
  return (
    <AppContext.Provider
      value={{
        courses,
        setCourses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* 
// wrap at root component
<ContextProvider>
  <App/>
</ContextProvider> 

// usage example
export const MyComponent = () => {
  const { activeMenu, setActiveMenu } = useContext(StateContext)
  return (
    <div>{activeMenu}</div>
  );
}
*/
