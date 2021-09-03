import React, { useState, useEffect } from "react";
import { View } from "react-native";
import getStyleSheet from "./styles";
import ProgressBar from "./components/ProgressBar";

export default function MeasuringProgress() {
  const styles = getStyleSheet(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      setProgress(currentProgress => {
        if (currentProgress < 1) {
          setTimeout(updateProgress, 300);
        }
        return currentProgress + 0.01;
      });
    }

    updateProgress();
  }, []);

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
    </View>
  );
}
