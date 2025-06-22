import { useState, useEffect, useRef } from 'react';
import type { TrackReferenceOrPlaceholder } from '@livekit/components-core';

interface UseAudioDataProps {
  micEnabled: boolean;
  voiceAssistantAudioTrack?: TrackReferenceOrPlaceholder;
}

export const useAudioData = ({ micEnabled, voiceAssistantAudioTrack }: UseAudioDataProps) => {
  const [audioData, setAudioData] = useState<Uint8Array | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Cleanup previous audio context
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (!micEnabled) {
      setAudioData(null);
      return;
    }

    const setupAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
        
        const audioContext = new AudioContext();
        audioContextRef.current = audioContext;
        
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        
        source.connect(analyser);
        analyserRef.current = analyser;
        
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        const analyzeAudio = () => {
          if (analyserRef.current) {
            analyserRef.current.getByteFrequencyData(dataArray);
            setAudioData(new Uint8Array(dataArray));
            animationFrameRef.current = requestAnimationFrame(analyzeAudio);
          }
        };
        
        analyzeAudio();
      } catch (error) {
        console.error('Error accessing microphone:', error);
        setAudioData(null);
      }
    };

    setupAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [micEnabled]);

  return { audioData };
};
