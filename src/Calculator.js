import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";

const Button = ({ text, onPress, flex, type }) => {
  const backgroundColor =
    type === "reset"
      ? COLOR.RESET
      : type === "operator"
      ? COLOR.OPERATOR
      : type === "num"
      ? COLOR.NUM
      : "transparent";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderWidth: 0.2,
        borderColor: "grey",
      }}
    >
      <Text style={{ color: "white", fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  );
};

const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

const InputContainer = styled.View`
  background-color: ${COLOR.RESULT};
  min-height: 50px;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
`;

export default () => {
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);

  return (
    <View style={{ flex: 1, width: 250, justifyContent: "center" }}>
      <InputContainer>
        <Text style={{ color: "white", fontSize: 35, textAlign: "right" }}>
          {input}
        </Text>
      </InputContainer>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="reset" text="AC" onPress={() => null} flex={3} />
        <Button type="operator" text="+" onPress={() => null} flex={1} />
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="7" onPress={() => null} flex={1} />
        <Button type="num" text="8" onPress={() => null} flex={1} />
        <Button type="num" text="9" onPress={() => null} flex={1} />
        <Button type="operator" text="*" onPress={() => null} flex={1} />
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="4" onPress={() => null} flex={1} />
        <Button type="num" text="5" onPress={() => null} flex={1} />
        <Button type="num" text="6" onPress={() => null} flex={1} />
        <Button type="operator" text="-" onPress={() => null} flex={1} />
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="1" onPress={() => null} flex={1} />
        <Button type="num" text="2" onPress={() => null} flex={1} />
        <Button type="num" text="3" onPress={() => null} flex={1} />
        <Button type="operator" text="+" onPress={() => null} flex={1} />
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="0" onPress={() => null} flex={2} />
        <Button type="num" text="." onPress={() => null} flex={1} />
        <Button type="operator" text="=" onPress={() => null} flex={1} />
      </View>
    </View>
  );
};
