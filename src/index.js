import React, { useRef, useEffect, useState, createRef } from "react";
import { View } from "react-native";
import OtpInputBox from "./OtpInputBox";

const generateRefs = (NUMBER_OF_CELL) => {
  let arr = [];
  for (let i = 0; i < NUMBER_OF_CELL; i++) {
    arr.push("");
  }
  return arr;
};

const OtpColumn = (props) => {
  const {
    numberOfCell: NUMBER_OF_CELL,
    value,
    setOtpValue,
    style,
    editable,
  } = props;
  const [colums, setColumns] = useState([]);
  const elementsRef = useRef(
    generateRefs(NUMBER_OF_CELL).map(() => createRef())
  );
  const [input, setInput] = useState(value.length > 0 ? value.split("") : []);

  useEffect(() => {
    let array = [];

    for (let i = 0; i < NUMBER_OF_CELL; i++) {
      array.push([]);
    }

    setColumns(array);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {colums.map((item, index) => {
          return (
            <OtpInputBox
              key={"UNIQUE_KEY_" + index}
              testId={"KEY_" + index}
              index={index}
              ref={elementsRef.current[index]}
              elementsRef={elementsRef}
              input={input}
              setInput={setInput}
              numberOfCell={NUMBER_OF_CELL}
              setOtpValue={setOtpValue}
              style={style}
              editable={editable}
            />
          );
        })}
      </View>
      {/* <TouchableOpacity
        style={{ padding: 20, backgroundColor: "pink", margin: 20 }}
        onPress={() => {
          console.log("Input on Click Me  ", input);
        }}
      >
        <Text>Click Me </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default OtpColumn;
