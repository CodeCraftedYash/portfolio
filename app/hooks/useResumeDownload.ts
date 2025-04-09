'use client';

import { useActionState } from 'react';

export function useResumeDownload() {
  const download = async () => {
    const response = await fetch('app/assets/YashMishra.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'yash-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return useActionState(download, null);
}
