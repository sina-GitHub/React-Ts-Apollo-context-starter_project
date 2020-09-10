import React, { useState } from "react";

interface AppContextInterface {
  name: string;
}

const sampleAppContext: AppContextInterface = {
  name: "Using React Context in a Typescript App",
};

export const context = React.createContext<any>({});

export const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;

export const ProviderComponent = (props: any) => {
  const [state, setState] = useState(sampleAppContext);
  return (
    <AppContextProvider value={[state, setState]}>
      {props.children}
    </AppContextProvider>
  );
};
