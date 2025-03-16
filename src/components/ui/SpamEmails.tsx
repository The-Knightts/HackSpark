// @ts-nocheck

import { useState } from 'react';
import { Mail, Shield, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import styles from './SpamEmails.module.css';

const SpamEmails = () => {
  const [email, setEmail] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<'safe' | 'spam' | null>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulated analysis - replace with actual API call
    setTimeout(() => {
      setResult(Math.random() > 0.5 ? 'safe' : 'spam');
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className="text-center space-y-4">
        <h1 className={styles.title}>Spam Email Detector</h1>
        <p className="text-lg text-gray-600">Protect your inbox from unwanted spam</p>
      </div>

      <div className={styles.card}>
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <textarea
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Paste email content here..."
              className={styles.input}
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={!email || isAnalyzing}
            className={`${styles.button} flex items-center justify-center gap-2`}
          >
            {isAnalyzing && <Loader2 className="animate-spin" size={20} />}
            {isAnalyzing ? 'Analyzing...' : 'Analyze Email'}
          </button>
        </div>

        {result && (
          <div
            className={`${styles.resultCard} flex items-center gap-3 ${
              result === 'safe' ? styles.safe : styles.suspicious
            }`}
          >
            {result === 'safe' ? (
              <>
                <CheckCircle className="text-green-600" size={24} />
                <div>
                  <h3 className="font-medium text-green-900">Legitimate Email</h3>
                  <p className="text-green-700">This email appears to be safe</p>
                </div>
              </>
            ) : (
              <>
                <AlertTriangle className="text-red-600" size={24} />
                <div>
                  <h3 className="font-medium text-red-900">Spam Detected</h3>
                  <p className="text-red-700">This email shows characteristics of spam</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className={styles.infoCard}>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-blue-600" size={24} />
          <h2 className="text-xl font-semibold text-gray-900">Features</h2>
        </div>
        <div className={styles.stepsContainer}>
          <div className={`${styles.step} ${styles.stepOne}`}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Advanced Detection</h3>
              <p className={styles.stepDescription}>State-of-the-art spam detection algorithms</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepTwo}`}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Pattern Analysis</h3>
              <p className={styles.stepDescription}>Deep content and pattern analysis</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepThree}`}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Instant Results</h3>
              <p className={styles.stepDescription}>Get immediate feedback and recommendations</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepFour}`}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Enhanced Protection</h3>
              <p className={styles.stepDescription}>Shield against phishing and scam attempts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpamEmails;
