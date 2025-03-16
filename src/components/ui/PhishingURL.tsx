
import { useState } from 'react';
import { Search, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import styles from './PhishingURL.module.css';

const PhishingURL = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<'safe' | 'suspicious' | null>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulated analysis - replace with actual API call
    setTimeout(() => {
      setResult(Math.random() > 0.5 ? 'safe' : 'suspicious');
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className="text-center space-y-4">
        <h1 className={styles.title}>Phishing URL Detector</h1>

        <p className="text-lg text-gray-600">Check if a URL is potentially dangerous</p>
      </div>

      <div className={styles.card}>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL to analyze..."
              className={`${styles.input} w-full pl-10 pr-4 py-3 rounded-lg`}
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={!url || isAnalyzing}
            className={`${styles.button} px-6 py-3 rounded-lg font-medium ${
              isAnalyzing
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        {result && (
          <div
            className={`${styles.resultCard} mt-6 p-4 rounded-lg flex items-center gap-3 ${
              result === 'safe' ? styles.safe : styles.suspicious
            }`}
          >
            {result === 'safe' ? (
              <>
                <CheckCircle className="text-green-600" size={24} />
                <div>
                  <h3 className="font-medium text-green-900">Safe URL</h3>
                  <p className="text-green-700">This URL appears to be legitimate</p>
                </div>
              </>
            ) : (
              <>
                <AlertTriangle className="text-red-600" size={24} />
                <div>
                  <h3 className="font-medium text-red-900">Suspicious URL Detected</h3>
                  <p className="text-red-700">This URL shows signs of being a phishing attempt</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className={`${styles.infoCard} p-8 space-y-6`}>
        <div className={styles.infoHeader}>
          <Shield className={styles.infoIcon} size={32} />
          <h2 className={styles.infoTitle}>How it works</h2>
        </div>
        <div className={styles.stepsContainer}>
          <div className={`${styles.step} ${styles.stepOne}`}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Enter URL</h3>
              <p className={styles.stepDescription}>Input any suspicious URL you'd like to analyze</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepTwo}`}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Advanced Analysis</h3>
              <p className={styles.stepDescription}>Our AI-powered algorithm scans for phishing patterns</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepThree}`}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Instant Results</h3>
              <p className={styles.stepDescription}>Get immediate feedback on URL safety</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepFour}`}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Stay Protected</h3>
              <p className={styles.stepDescription}>Shield yourself from online threats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhishingURL
