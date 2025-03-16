import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, CheckCircle, AlertTriangle, Package } from 'lucide-react';
import styles from './ToolSubmission.module.css';

interface ToolSubmissionForm {
  name: string;
  description: string;
  version: string;
  author: string;
  email: string;
}

const ToolSubmission: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [form, setForm] = useState<ToolSubmissionForm>({
    name: '',
    description: '',
    version: '',
    author: '',
    email: ''
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile?.type === 'application/zip' || uploadedFile?.name.endsWith('.zip')) {
      setFile(uploadedFile);
      setUploadStatus('idle');
    } else {
      alert('Please upload a ZIP file');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/zip': ['.zip']
    },
    maxFiles: 1
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploadStatus('uploading');

    // Simulated upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 500);

    try {
      // TODO: Implement actual file upload logic here
      await new Promise(resolve => setTimeout(resolve, 3000));
      setUploadStatus('success');
      setUploadProgress(100);
    } catch (error) {
      setUploadStatus('error');
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Package className={styles.headerIcon} size={32} />
        <h1 className={styles.title}>Submit Your Tool</h1>
        <p className={styles.subtitle}>Share your security tools with the community</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.dropzone} {...getRootProps()}>
          <input {...getInputProps()} />
          <Upload size={48} className={styles.uploadIcon} />
          {isDragActive ? (
            <p>Drop the ZIP file here...</p>
          ) : (
            <p>Drag & drop your tool's ZIP file here, or click to select</p>
          )}
          {file && (
            <div className={styles.fileInfo}>
              <Package size={20} />
              <span>{file.name}</span>
              <span className={styles.fileSize}>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
            </div>
          )}
        </div>

        <div className={styles.formFields}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Tool Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="version">Version</label>
              <input
                type="text"
                id="version"
                name="version"
                value={form.version}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={form.author}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Contact Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {uploadStatus === 'uploading' && (
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${uploadProgress}%` }}
            />
            <span className={styles.progressText}>{uploadProgress}%</span>
          </div>
        )}

        {uploadStatus === 'success' && (
          <div className={styles.statusMessage + ' ' + styles.success}>
            <CheckCircle size={20} />
            <span>Tool submitted successfully! Our team will review it shortly.</span>
          </div>
        )}

        {uploadStatus === 'error' && (
          <div className={styles.statusMessage + ' ' + styles.error}>
            <AlertTriangle size={20} />
            <span>Failed to upload. Please try again.</span>
          </div>
        )}

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={!file || uploadStatus === 'uploading'}
        >
          {uploadStatus === 'uploading' ? 'Uploading...' : 'Submit Tool'}
        </button>
      </form>
    </div>
  );
};

export default ToolSubmission;