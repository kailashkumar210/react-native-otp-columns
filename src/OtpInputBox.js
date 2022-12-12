import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const OtpInputBox = React.forwardRef((props, ref) => {
  const { setInput, input, key, index, elementsRef, setOtpValue, style } =
    props;
  const [number, setNumber] = useState(input[index]);

  const onChangeText = (text) => {
    setNumber(text);
    let arr = [...input];
    arr[index] = text;
    setInput(arr);
    setOtpValue(arr.join(""));
  };

  const onKeyPress = ({ nativeEvent: { key: keyValue } }) => {
    let shouldFocus =
      index + 1 != elementsRef.current.length && keyValue != "Backspace";

    if (shouldFocus) {
      elementsRef.current[index + 1].current.focus();
    }

    if (keyValue == "Backspace" && index != 0) {
      setNumber("");
      for (let i = index; i < elementsRef.current.length; i++) {
        elementsRef.current[i].current.clear();
      }
      if (index == elementsRef.current.length - 1 && input[index]) {
        //Just set the value, so what onChangeText is doing
        //Only need to put this condition
      } else elementsRef.current[index - 1].current.focus();
    }
  };

  const onFocus = (e) => {
    setNumber("");
    let arr = [...input];
    for (let i = index; i < elementsRef.current.length; i++) {
      elementsRef.current[i].current.clear();
      arr[i] = "";
    }
    setInput([...arr]);
    setOtpValue(arr.join(""));
  };

  return (
    <TextInput
      ref={ref}
      testID={key}
      value={number}
      onChangeText={onChangeText}
      onKeyPress={onKeyPress}
      onFocus={onFocus}
      keyboardType="numeric"
      textAlign="center"
      maxLength={1}
      style={{ ...styles.inputBox, ...style }}
    />
  );
});

export default OtpInputBox;

const styles = StyleSheet.create({
  inputBox: {
    borderColor: "red",
    borderWidth: 1.0,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
});
