let currentAudio = null;

export async function textToSpeech(utterance, onSpeechEnd) {
  console.log("TTS RAN", { utterance }); 
  
  if (!utterance) {
    console.error('No utterance provided');
    return;
  }

  if (currentAudio) {
    currentAudio.pause(); // Stop any currently playing audio
    currentAudio = null;
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
    
    // expected response is a blob
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    currentAudio = audio;
    
    audio.addEventListener('ended', () => {
        currentAudio = null;
        // Clean up the temporary URL to release memory
        URL.revokeObjectURL(audioUrl);
        if (typeof onSpeechEnd === 'function') {
            onSpeechEnd();
        }
    });

    audio.addEventListener('error', (e) => {
        console.error('Audio element error:', e);
        URL.revokeObjectURL(audioUrl); // Also clean up on error
    });
  
    try {
      await audio.play();
      console.log('Playback started successfully');
    } catch (playError){
        console.error('Playback failed:', {
          name: playError.name,
          message: playError.message
        });
        URL.revokeObjectURL(audioUrl);
      }  
  } catch (error) {
    console.error('Comprehensive error in Text-to-Speech:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
  }
}