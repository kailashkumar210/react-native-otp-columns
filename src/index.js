import React, { useRef, useEffect, useState, createRef } from "react";
import { View } from "react-native";
import OtpInputBox from "./OtpInputBox";

// const NUMBER_OF_CELL = 6;

let array = [];
// refs = [];
array.length = 5;

const generateRefs = (NUMBER_OF_CELL) => {
  let arr = [];
  for (let i = 0; i < NUMBER_OF_CELL; i++) {
    arr.push("");
  }
  return arr;
};

const Otp = (props) => {
  const { numberOfCell: NUMBER_OF_CELL, input, setInput } = props;
  const [colums, setColumns] = useState([]);
  const elementsRef = useRef(
    generateRefs(NUMBER_OF_CELL).map(() => createRef())
  );
  //   const [input, setInput] = useState(generateRefs(NUMBER_OF_CELL));

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
              key={"KEY_" + index}
              index={index}
              ref={elementsRef.current[index]}
              elementsRef={elementsRef}
              input={input}
              setInput={setInput}
              numberOfCell={NUMBER_OF_CELL}
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

export default Otp;
