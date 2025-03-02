import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgoraRTC from "agora-rtc-sdk-ng";
import { startStream, stopStream } from "../actions/streamActions";
import { Video, Mic, MicOff, VideoOff, Play, StopCircle } from "lucide-react";
import "../styles/livestream.css";

const APP_ID = process.env.REACT_APP_AGORA_APP_ID;
const CHANNEL_NAME = process.env.REACT_APP_CHANNEL_NAME;
const TOKEN = process.env.REACT_APP_AGORA_TEMP_TOKEN;

const Livestream = () => {
  const dispatch = useDispatch();
  const isStreaming = useSelector((state) => state.livestream?.isStreaming ?? false);
  const videoRef = useRef(null);
  const client = useRef(AgoraRTC.createClient({ mode: "live", codec: "vp8" }));
  const localTracks = useRef([]);
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const startLive = async () => {
    if (!APP_ID) {
      console.error("Agora App ID is missing!");
      return;
    }

    try {
      await client.current.join(APP_ID, CHANNEL_NAME, TOKEN, null);
      localTracks.current = await AgoraRTC.createMicrophoneAndCameraTracks();
      localTracks.current[1].play(videoRef.current);
      await client.current.publish(localTracks.current);
      dispatch(startStream());
    } catch (error) {
      console.error("Error starting live stream:", error);
    }
  };

  const stopLive = async () => {
    localTracks.current.forEach((track) => track.stop() && track.close());
    await client.current.leave();
    dispatch(stopStream());
  };

  const toggleMic = () => {
    localTracks.current[0].setEnabled(!micEnabled);
    setMicEnabled(!micEnabled);
  };

  const toggleCamera = () => {
    localTracks.current[1].setEnabled(!cameraEnabled);
    setCameraEnabled(!cameraEnabled);
  };

  return (
    <div className="livestream-container">
      <div id="video-container">
        <video ref={videoRef} autoPlay playsInline></video>
      </div>
      <div className="controls">
        {!isStreaming ? (
          <button className="start-btn" onClick={startLive}>
            <Play size={32} color="green" />
          </button>
        ) : (
          <button className="stop-btn" onClick={stopLive}>
            <StopCircle size={32} color="red" />
          </button>
        )}
        <button className="mic-btn" onClick={toggleMic}>
          {micEnabled ? <Mic size={28} color="black" /> : <MicOff size={28} color="gray" />}
        </button>
        <button className="camera-btn" onClick={toggleCamera}>
          {cameraEnabled ? <Video size={28} color="black" /> : <VideoOff size={28} color="gray" />}
        </button>
      </div>
    </div>
  );
};

export default Livestream;
