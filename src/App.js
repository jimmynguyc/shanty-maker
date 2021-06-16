import './App.css'
import React from 'react';
import Webcam from 'react-webcam';
import RabbitLyrics from 'rabbit-lyrics';

const App = () => {
  const webcamRef = React.useRef(null);
  const playbackRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const wellermanRef = React.useRef(null);
  const lyricsRef = React.useRef(null);
  const [loaded, setLoaded] = React.useState(false);
  const [capturing, setCapturing] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [showKaraoke, setShowKaraoke] = React.useState(false);

  const videoConstraints = {
    height: 720,
    width: 1280,
    frameRate: { min: 24, ideal: 30, max: 60 },
    facingMode: "user"
  }

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    setPlaying(false);
    setRecordedChunks([]);
    playbackRef.current.pause()
    playbackRef.current.removeAttribute('src')
    playbackRef.current.load()
    wellermanRef.current.currentTime = 0
    wellermanRef.current.play();
    var options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType: 'video/webm; codecs=vp8,opus'
    }
    try {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, options);
    } catch (e0) {
      alert('MediaRecorder is not supported by this browser. Please use Firefox.');
      return;
    }
    
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    wellermanRef.current.pause();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handlePlay = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      playbackRef.current.src = window.URL.createObjectURL(blob);
      setPlaying(true)
      wellermanRef.current.currentTime = 0
      wellermanRef.current.play();
    }
  }, [playbackRef, wellermanRef, recordedChunks, setPlaying]);

  const handleStop = React.useCallback(() => {
    setPlaying(false)
    playbackRef.current.pause()
    playbackRef.current.currentTime = 0
    wellermanRef.current.currentTime = 0
    wellermanRef.current.pause();
  }, [playbackRef, wellermanRef, setPlaying]); 

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "shanty.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);


  const handleLoaded = React.useCallback(() => {
    setLoaded(true)
    new RabbitLyrics(
      lyricsRef.current,
      wellermanRef.current
  )
  }, [setLoaded, wellermanRef, lyricsRef])

  const lyrics = `[00:02.00] There once was a ship that put to sea
  [00:05.00] The name of the ship was the Billy of Tea 
  [00:08.00] The winds blew up, her bow dipped down 
  [00:10.00] Oh blow, my bully boys, blow (huh) 

  [00:13.00] Soon may the Wellerman come
  [00:15.00] To bring us sugar and tea and rum
  [00:18.00] One day, when the tonguing is done
  [00:20.00] We'll take our leave and go
  
  [00:23.00] She'd not been two weeks from shore
  [00:25.00] When down on her a right whale bore
  [00:28.00] The captain called all hands and swore
  [00:30.00] He'd take that whale in tow (huh)
  
  [00:33.00] Soon may the Wellerman come
  [00:35.00] To bring us sugar and tea and rum
  [00:38.00] One day, when the tonguing is done
  [00:40.00] We'll take our leave and go
  
  [00:43.00] Da-da-da-da-da
  [00:45.00] Da-da-da-da-da-da-da
  [00:48.00] Da-da-da-da-da-da-da-da-da-da-da
  
  [00:53.00] Before the boat had hit the water
  [00:55.00] The whale's tail came up and caught her
  [00:58.00] All hands to the side, harpooned and fought her
  [01:00.00] When she dived down low (huh)…
  
  [01:03.00] Soon may the Wellerman come
  [01:05.50] To bring us sugar and tea and rum
  [01:08.00] One day, when the tonguing is done
  [01:10.00] We'll take our leave and go
  
  [01:12.00] No line was cut, no whale was freed
  [01:15.00] The captain's mind was not of greed
  [01:18.00] And he belonged to the Whaleman's creed
  [01:20.00] She took that ship in tow (huh)

  [01:23.00] Soon may the Wellerman come
  [01:25.00] To bring us sugar and tea and rum
  [01:28.00] One day, when the tonguing is done
  [01:30.00] We'll take our leave and go

  [01:33.00] Da-da-da-da-da
  [01:35.00] Da-da-da-da-da-da-da
  [01:38.00] Da-da-da-da-da-da-da-da-da-da-da

  [01:42.00] For forty days or even more
  [01:45.00] The line went slack then tight once more
  [01:48.00] All boats were lost, there were only four
  [01:50.00] But still that whale did go (huh)

  [01:53.00] Soon may the Wellerman come
  [01:55.00] To bring us sugar and tea and rum
  [01:58.00] One day, when the tonguing is done
  [02:00.00] We'll take our leave and go

  [02:03.00] As far as I've heard, the fight's still on
  [02:06.00] The line's not cut, and the whale's not gone
  [02:07.00] The Wellerman makes his regular call
  [02:10.00] To encourage the captain, crew and all (huh)

  [02:13.00] Soon may the Wellerman come
  [02:15.00] To bring us sugar and tea and rum
  [02:18.00] One day, when the tonguing is done
  [02:20.00] We'll take our leave and go

  [02:23.00] Soon may the Wellerman come
  [02:25.00] To bring us sugar and tea and rum
  [02:28.00] One day, when the tonguing is done
  [02:30.00] We'll take our leave and go  
  `

  const handleError = () => {
    console.log('error')
    alert('MediaRecorder is not supported by this browser. Please use Firefox.');
  }

  return (
    <div className="App">
      <br />
      <div style={{display: showKaraoke ? 'none' : 'block' }} >
        <img 
          width="500"
          src="./flag.png" 
          alt="Pirate Flag" />
        <p>
          Ah this here reminds me o' the time when I be sailin' in the 'igh seas <br />
          with me fellow arr, mates, singin' our 'earts out until the sun goes down <br />
          after a day o' 'onest labour.<br />
        </p>
        <p>
          It be the only way to go I tell ye'all. So quit ya blabberin' an' begin doin'.
        </p>
        <br />
        <button onClick={setShowKaraoke}>Aye aye Cap'n</button>
      </div>
      <div style={{display: showKaraoke ? 'block' : 'none' }} >
        <Webcam 
          height={720}
          ref={webcamRef} 
          videoConstraints={videoConstraints} 
          onUserMediaError={handleError}
          />
        <video 
          height={720}
          ref={playbackRef} 
          autoPlay loop playsInline />
        <br />
        <font style={{fontSize: 'x-small'}}>Note: Use Firefox if you don't see anything</font>
        <br />
        <br />
        {loaded ? (
          <>
            {capturing ? (
              <button onClick={handleStopCaptureClick}>Avast ye Capturin</button>
            ) : (
              <button onClick={handleStartCaptureClick}>Argg Let's Start ye Singin</button>
            )}
          </>
        ) : (
          <button>Loading ...</button>
        )}
        {recordedChunks.length > 0 && (<>
          {playing ? (
            <button onClick={handleStop}>Avast</button>
          ) : (
            <button onClick={handlePlay}>Play</button>
          )}
          <button onClick={handleDownload}>Download</button>
          </>
        )}
        <hr />
        <div className="wellerman">
          <video 
            ref={wellermanRef} 
            controls 
            width="300" 
            src="./wellerman.mp4" 
            playsInline 
            onLoadedData={handleLoaded}
            onEnded={handleStopCaptureClick}
            /> 
          Credits:<br /> Nathan Evans - Wellerman (TikTok Sea Shanty) | Official Audio 
          
        </div>
        <div className="rabbit-lyrics" ref={lyricsRef} style={{display: loaded ? 'inline-block' : 'none' }} dangerouslySetInnerHTML={{ __html: lyrics }}>
        </div>
      </div> 
    </div>
  );
};

export default App;
