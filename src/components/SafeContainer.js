import { SafeAreaView, StatusBar } from "react-native";
import { estilosContainer } from "../stylesheet/estilos";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("../../assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("../../assets/fonts/NotoSans-VariableFont.ttf"),
  });

  const aoAtualizarLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        onLayout={aoAtualizarLayout}
        style={estilosContainer.container}
      >
        {children}
      </SafeAreaView>
    </>
  );
}
