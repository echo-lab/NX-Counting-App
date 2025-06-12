let currentAudio = null;

export async function textToSpeech(utterance, onSpeechEnd) {
  console.log("TTS RAN", { utterance }); 
  
  if (!utterance) {
    console.error('No utterance provided');
    return;
  }

  try {
    const requestData = {
      text: utterance,
    };

    console.log('Sending request with data:', requestData);

    const response = await fetch('/speech/synthesize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }).catch(fetchError => {
      console.error('Fetch request failed:', fetchError);
      throw fetchError;
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server error response:', {
        status: response.status,
        statusText: response.statusText,
        errorText
      });
      return;
    }

    const data = await response.json();
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }

    console.log('Parsed response data:', data);

    // Validate audio content
    if (!data || !data.audioContent) {
      console.error('No audio content in response', data);
      return;
    }

    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }

    const audioSrc = `data:audio/mp3;base64,${data.audioContent}`;

    const audio = new Audio(audioSrc);
    currentAudio = audio;

    // Set up event listeners
    audio.addEventListener('error', (e) => {
      console.error('Audio element error:', e);
      currentAudio = null;
    });

    audio.addEventListener('ended', () => {
      currentAudio = null;
      if (typeof onSpeechEnd === 'function') {
        onSpeechEnd();
      }
    });
    
    try {
      await audio.play();
      console.log('Playback started successfully');
    } catch (playError) {
      console.error('Playback failed:', {
        name: playError.name,
        message: playError.message
      });
    }

  } catch (error) {
    console.error('Comprehensive error in Text-to-Speech:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
  }
}