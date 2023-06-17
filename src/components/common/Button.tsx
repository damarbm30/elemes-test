import { ReactNode } from "react";

const Button = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <button className={`rounded-full px-[1.125rem] py-2.5 font-medium transition-all hover:brightness-90 ${className}`}>
      {children}
    </button>
  );
};
export default Button;
