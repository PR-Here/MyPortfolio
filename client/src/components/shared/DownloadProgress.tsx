import { motion } from 'framer-motion';

interface DownloadProgressProps {
  progress: number;
}

const DownloadProgress = ({ progress }: DownloadProgressProps) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    }}>
      <div style={{
        width: '100%',
        height: '6px',
        background: 'rgba(100, 255, 218, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: `${progress - 100}%` }}
          transition={{ duration: 0.3 }}
          style={{
            width: '100%',
            backgroundColor: '#64ffda',
            borderRadius: '10px',
            height: '6px'
          } as const}
        />
      </div>
      <span style={{
        color: '#64ffda',
        fontSize: '12px',
        minWidth: '40px'
      }}>
        {Math.round(progress)}%
      </span>
    </div>
  );
};

export default DownloadProgress; 