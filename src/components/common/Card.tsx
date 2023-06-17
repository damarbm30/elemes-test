import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor: string;
};

const Card = ({ bgColor, children }: Props) => {
  return (
    <div
      className="origin-top cursor-pointer rounded-lg bg-contain p-12 shadow-sm transition-all hover:scale-y-105 hover:bg-card-background"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};
export default Card;
