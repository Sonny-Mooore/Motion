import Header from '@/componets/Header/Header';
import React, { useState } from 'react';
import Device from '@/componets/modal/device/Device';
import {router} from "next/client";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClosePopup = () => setOpen(!open);

  return (
    <div className="page">
      <img src="/images/noize.png" className="noise" />
      <div className={'blur-1'} />
      <div className={'blur-2'} />
      <main className="content">
        <Header handleClosePopup={handleClosePopup} />
        <img
          className="background"
          src="/images/background.png"
          alt="background"
        />
      </main>
    </div>
  );
}
