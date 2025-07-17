import MetricDustVisualizer from "@/MetricDustVisualizer";
import { useAudioData } from "@/MetricDustVisualizer/hooks/useAudioData";
import { useTracks, useVoiceAssistant } from "@livekit/components-react";
import { LocalParticipant, Track } from "livekit-client";

export const VisualizerContainer = () => {
const tracks = useTracks();
// Filter local tracks
const localTracks = tracks.filter(
 ({ participant }) => participant instanceof LocalParticipant
);


const localMicTrack = localTracks.find(
 ({ source }) => source === Track.Source.Microphone
);


// Get actual track states - check if track exists and is enabled (not muted)


const micTrack = localMicTrack?.publication?.track;
const actualMicEnabled = micTrack && !micTrack.isMuted && localMicTrack?.publication?.isEnabled;
// Get LiveKit voice assistant audio track and remote participants
const voiceAssistant = useVoiceAssistant();
const { audioTrack } = voiceAssistant;

// const { voiceAssistantAudioData } = useAudioData({
//  micEnabled: actualMicEnabled,
//  voiceAssistantAudioTrack: audioTrack,
//  preferredSource: 'voiceAssistant'
// });

    return (
        <MetricDustVisualizer 
            micEnabled={false}
            particleColor="#4961e1"
            voiceAssistantAudioTrack={audioTrack}
        />
    )
}