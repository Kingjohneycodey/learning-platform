import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgoraRTC from "agora-rtc-sdk-ng";
import { startStream, stopStream } from "../actions/streamActions";
import "../styles/livestream.css";

const APP_ID = process.env.AGORA_APP_ID;
const CHANNEL_NAME = "livestream";
const TOKEN = process.env.AGORA_TEMP_TOKEN

const Livestream = () => {
  const dispatch = useDispatch();
  const isStreaming = useSelector((state) => state.stream.isStreaming);
  const videoRef = useRef(null);
  const client = useRef(AgoraRTC.createClient({ mode: "live", codec: "vp8" }));
  const localTracks = useRef([]);

  const startLive = async () => {
    await client.current.join(APP_ID, CHANNEL_NAME, TOKEN, null);
    localTracks.current = await AgoraRTC.createMicrophoneAndCameraTracks();
    localTracks.current[1].play(videoRef.current);
    await client.current.publish(localTracks.current);
    dispatch(startStream());
  };

  const stopLive = async () => {
    localTracks.current.forEach(track => track.stop() && track.close());
    await client.current.leave();
    dispatch(stopStream());
  };

  return (
    <div className="livestream-container">
      <h2>Livestream</h2>
      <div id="video-container">
        <video ref={videoRef} autoPlay playsInline></video>
      </div>
      {!isStreaming ? (
        <button onClick={startLive}>Start Stream</button>
      ) : (
        <button onClick={stopLive}>Stop Stream</button>
      )}
    </div>
  );
};

export default Livestream;
