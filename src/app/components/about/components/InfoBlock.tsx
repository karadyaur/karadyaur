
interface InfoBlockProps {
  children: React.ReactNode;
  gradient: string;
}

export const InfoBlock = ({ children, gradient }: InfoBlockProps) => (
  <div className="bg-neutral-900/50 p-6 rounded-xl backdrop-blur-sm border border-neutral-800">
    {children}
  </div>
);