import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingScreen = () => (
  <div className="">
    <div className="mb2 w-20"><Skeleton /></div>
    <div className="mt3 w-20 mb0"><Skeleton /></div>
    <div className="w-50"><Skeleton /></div>
    <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
    <div className="mb2 w-20"><Skeleton /></div>
    <div className="mt3 w-20 mb0"><Skeleton /></div>
    <div className="w-50"><Skeleton /></div>
    <div className="mt3 w-20 mb0"><Skeleton /></div>
    <div className="w-50"><Skeleton /></div>
    <div className="mt3 w-20 mb0"><Skeleton /></div>
    <div className="w-50"><Skeleton /></div>
    <div className="mt3 w-10"><Skeleton /></div>
    <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
    <div className="mb2 w-20"><Skeleton /></div>
    <div className="mt3 w-20 mb0"><Skeleton /></div>
    <div className="w-50"><Skeleton /></div>
    <div className="mt3 w-20 mb0"><Skeleton /></div>
    <div className="w-50"><Skeleton /></div>
    <div className="mt3 w-20 mb0"><Skeleton /></div>
    <div className="w-50"><Skeleton /></div>
    <div className="mt3 w-10"><Skeleton /></div>
  </div>
);

export default LoadingScreen;
