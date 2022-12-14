# react-native-otp-column

### Sample Screenshot

<img src="https://user-images.githubusercontent.com/43596131/207510014-0ea1ec2a-fceb-4816-8708-52bd7d6964ab.png" width="250" height="450">


### Guide : 

> Install package using 

` npm i react-native-otp-column `

> Use as given in below example 

### Example : 

```
import React, { useState} from 'react';
import {View} from 'react-native';
import OtpColumn from 'react-native-otp-column';

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
```

### Props: 

| Props         |   type       |
| ------------- | ------------ |
| numberOfCell  |   Number     |
| value         |   Number     |
| setOtpValue   |  function    |
| style         | style Object |

