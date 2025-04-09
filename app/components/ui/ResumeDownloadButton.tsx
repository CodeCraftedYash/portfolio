'use client';
import { IoMdDownload } from "react-icons/io";
import { useResumeDownload } from '@/app/hooks/useResumeDownload';
import { startTransition } from 'react';
import Button from './Buttons';
export default function ResumeDownloadButton() {
  const [error, handleDownload, isPending] = useResumeDownload();

  return (
    <Button variant="primary" onClick={() => startTransition(() => handleDownload())}>
      {isPending ? 'Downloading...' : <h4 className='flex items-center flex-nowrap gap-x-2'>My Resume <span><IoMdDownload /></span></h4>}
    </Button>
  );
}
