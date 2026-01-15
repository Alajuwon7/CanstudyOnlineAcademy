'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  items,
  defaultTab,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const activeContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className={className}>
      <div className="flex border-b border-gray-300 mb-0">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              'flex-1 px-0 py-[18px] font-secondary text-body-md transition-colors tracking-[-0.5px] relative',
              activeTab === item.id
                ? 'text-primary font-semibold'
                : 'text-text-secondary font-medium hover:text-primary'
            )}
          >
            {item.label}
            {activeTab === item.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
            )}
          </button>
        ))}
      </div>
      <div className="mt-12">{activeContent}</div>
    </div>
  );
};
