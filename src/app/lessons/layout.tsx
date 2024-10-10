import Header from '@/components/Header';
import { ReactNode } from 'react';

const AssigmentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default AssigmentLayout;
