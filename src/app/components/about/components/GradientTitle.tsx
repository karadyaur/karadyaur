
interface GradientTitleProps {
  children: React.ReactNode;
  gradient: string;
}

export const GradientTitle = ({ children, gradient }: GradientTitleProps) => (
  <h2 className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>
    {children}
  </h2>
);