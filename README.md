# react-native-otp-columns

# Example : 

import React, { useState} from 'react';
import {View} from 'react-native';
import OtpColumn from 'react-native-otp-columns';

const OtpComponent = props => {
  const [otp, setOpt] = useState('');

  return (
    <View style={{flex: 1}}>
      <OtpColumn 
          numberOfCell={6} 
          value={otp} 
          setOtpValue={setOpt} 
          style={{borderColor: 'black', borderWidth: 4, borderRadius: 20}}
      />
    </View>
  );
};

export default OtpComponent;


# Props: 

numberOfCell
value
setOtpValue  
style
