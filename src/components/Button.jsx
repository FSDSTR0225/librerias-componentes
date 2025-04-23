export const Button = ({ children, icon, className, ...props }) => {
  return (
    <button className={className} {...props}>
      <div className="flex items-center gap-2">
        {icon}
        {children}
      </div>
    </button>
  );
};
