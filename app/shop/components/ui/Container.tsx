interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export function Container({
  children,
  className,
}: ContainerProps): React.ReactNode {
  return (
    <div className={`mx-auto max-w-7xl w-full px-2 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
