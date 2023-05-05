import 'expo-dev-client';
import React, {useState} from 'react';
import AgoraUIKit, {PropsInterface} from 'agora-rn-uikit';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props: AgoraUIKitProps = {
    connectionData: {
      appId: '21609413ecbc4887ac570899a3bcea20',
      channel: 'test',
    },
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
    <AgoraUIKit connectionData={props.connectionData} rtcCallbacks={props.rtcCallbacks} />
  ) : null;
};

export default App;