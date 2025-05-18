import React, { ReactNode } from 'react';

interface PageContainerProps {
  title: string;
  children: ReactNode;
  actionButton?: ReactNode;
}

const PageContainer = ({ title, children, actionButton }: PageContainerProps) => {
  return (
    <div className="h-full flex flex-col" style={{ overflow: 'visible' }}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        {actionButton}
      </div>
      <div className="flex-1" style={{ overflow: 'visible' }}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer; 