'use client';
import { IoMdDownload } from "react-icons/io";
import { useResumeDownload } from '@/app/hooks/useResumeDownload';
import { startTransition } from 'react';
import Button from './Buttons';
import Loading from "../animation/Loading";
export default function ResumeDownloadButton() {
  const [error, handleDownload, isPending] = useResumeDownload();

  return (
    <>
     {isPending ? <div className=" bg-white p-4 rounded-2xl"><Loading text="Downloading"/></div> :
    <Button variant="primary" onClick={() => startTransition(() => handleDownload())}>
      <h4 className='flex items-center flex-nowrap gap-x-2'>My Resume <span><IoMdDownload /></span></h4>
    </Button>}
    {error && (
        <p className="text-red-500 mt-2 text-sm">
          {error}
        </p>
      )}
    </>
  );
}
