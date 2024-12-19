const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle =
    "p-28 m-4 flex items-center justify-center border border-solid border-gray-400 shadow-lg";
  return <div className={cardStyle}>{children}</div>;
};

export default Card;
