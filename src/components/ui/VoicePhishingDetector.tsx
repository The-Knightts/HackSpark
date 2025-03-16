import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './VoicePhishingDetector.module.css';

interface FileWithPreview extends File {
  preview?: string;
}

export const VoicePhishingDetector: React.FC = () => {
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [result, setResult] = useState<{
    isSafe: boolean;
    confidence: number;
    details?: string;
  } | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const audioFile = acceptedFiles[0];
      setFile(Object.assign(audioFile, {
        preview: URL.createObjectURL(audioFile)
      }));
      
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          analyzeAudio(audioFile);
        }
      }, 200);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.m4a', '.aac']
    },
    multiple: false
  });

  const analyzeAudio = async (audioFile: File) => {
    setIsAnalyzing(true);
    
    // Simulate audio analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Adjusted logic for clearer differentiation
    const isOriginal = Math.random() > 0.5;
    const confidence = isOriginal
      ? 85 + (Math.random() * 10) // Original: 85-95%
      : 30 + (Math.random() * 10); // Fake: 30-40%
    
    setResult({
      isSafe: isOriginal,
      confidence,
      details: isOriginal 
        ? 'High confidence that this is an original recording'
        : 'Detected potential AI-generated patterns in voice modulation'
    });
    
    setIsAnalyzing(false);
  };

  const removeFile = () => {
    if (file?.preview) {
      URL.revokeObjectURL(file.preview);
    }
    setFile(null);
    setResult(null);
    setUploadProgress(0);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Voice Phishing Detector</h1>
      
      <div className={styles.card}>
        <div
          {...getRootProps()}
          className={`${styles.dropzone} ${isDragActive ? styles.dragging : ''} ${file ? styles.active : ''}`}
        >
          <input {...getInputProps()} />
          <div className={styles.dropzoneIcon}>🎵</div>
          {!file ? (
            <>
              <p className={styles.dropzoneText}>
                Drag and drop your audio file here, or click to select
              </p>
              <p className={styles.dropzoneSubtext}>
                Supports MP3, WAV, M4A, and AAC files
              </p>
            </>
          ) : (
            <div className={styles.filePreview}>
              <div className={styles.fileInfo}>
                <div className={styles.fileName}>{file.name}</div>
                <div className={styles.fileSize}>
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </div>
                {uploadProgress < 100 && (
                  <div className={styles.uploadProgress}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                )}
              </div>
              <button
                className={styles.removeFile}
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
              >
                ×
              </button>
            </div>
          )}
        </div>

        {isAnalyzing && (
          <div className={styles.status}>
            <div className={styles.statusIcon} />
            Analyzing audio...
          </div>
        )}

        {result && (
          <div className={`${styles.card} ${styles.resultCard} ${result.isSafe ? styles.safe : styles.suspicious}`}>
            <h3>{result.isSafe ? 'Audio appears to be original' : 'Potential AI-generated audio detected'}</h3>
            <div className={styles.confidenceBar}>
              <div
                className={styles.confidenceProgress}
                style={{ width: `${result.confidence}%` }}
              />
            </div>
            <p>Confidence: {result.confidence.toFixed(1)}%</p>
            {result.details && <p>{result.details}</p>}
          </div>
        )}
      </div>
    </div>
  );
};