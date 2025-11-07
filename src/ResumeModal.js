import React, { useEffect } from 'react';
import './Home.css';

// Simple modal that embeds a Google Drive preview for a given file id
export default function ResumeModal({ open, onClose, fileId }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  // Drive preview URL. File must be shared so that anyone with link can view.
  const src = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="resume-modal-backdrop" role="dialog" aria-modal="true">
      <div className="resume-modal">
        <div className="resume-modal-header">
          <button className="resume-close" onClick={onClose} aria-label="Close preview">✕</button>
        </div>
        <div className="resume-modal-body">
          <iframe
            title="Resume Preview"
            src={src}
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
