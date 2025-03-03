import { useState } from 'react';
import './SharedComponents.css';
import cvPdf from '../../assets/cv.pdf';

interface DownloadButtonProps {
  className?: string;
  variant?: 'static-glow' | 'interactive-glow';
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  className = '', 
  variant = 'interactive-glow' 
}) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if(downloading) return;
    setDownloading(true);
    try {
      // Create a link element
      const link = document.createElement('a');
      link.href = cvPdf;
      link.download = 'cv.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up after download
      setTimeout(() => {
        setDownloading(false);
      }, 1200);

    } catch (error) {
      console.error('Download failed:', error);
      setDownloading(false);
    }
  };

  return (
    <div className={className} style={{ position: 'relative' }}>
      <button 
        className={`download-btn ${variant} ${className}`}
        onClick={handleDownload}
        disabled={downloading}
      >
        <span className='download-btn-text'>
          {downloading ? 'Downloading...' : 'Download CV'}
        </span>
      </button>
    </div>
  );
};

export default DownloadButton; 