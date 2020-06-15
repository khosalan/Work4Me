import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import validator from "validator";

import SimpleInput from "../../../components/Authenticate/SimpleInput";
import SubmitButton from "../../../components/Authenticate/SubmitButton";
import ErrorText from "../../../components/Authenticate/ErrorText";

import myStyles from "./myStyles";

const EmailInfo = ({ navigation }) => {
  const insets = useSafeArea();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const emailInputHandler = (email) => {
    setEmail(email);
  };

  const handleClickNext = () => {
    if (!validator.isEmail(email)) {
      setError(true);
      return;
    }
    setError(false);
    console.log("Next");
    navigation.navigate("Password");
  };

  let errorMessage;
  if (error)
    errorMessage = (
      <ErrorText
        title="Please enter a valid email address"
        icon="alert-circle-outline"
        style={myStyles.error}
      />
    );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...myStyles.container,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <View style={myStyles.header}>
          <Text style={myStyles.heading}>Enter your email address</Text>
        </View>

        <View style={myStyles.footer}>
          {errorMessage}
          <SimpleInput
            label="Email Address"
            style={myStyles.input}
            placeholder="Email Address"
            autoCorrect={false}
            blurOnSubmit
            value={email}
            onChangeText={emailInputHandler}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <SubmitButton
            title="Next"
            style={myStyles.button}
            onClick={handleClickNext}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EmailInfo;
