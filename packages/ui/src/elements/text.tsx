import { ReactNode, memo } from 'react';

type TTextProps = {
	size?: string;
	color?: string;
	fontFamily?: string;
	align?: string;
	weight?: string;
  className?: string[];
	children: ReactNode;
}

const Text = memo(({
  size = "text-sm", color = "text-primary", fontFamily, align, weight = 'font-normal',
  children, className = []
}: TTextProps) => { 
  className.push(size);
  className.push(color);
  className.push(weight);
  if (align) className.push(align);
  if (fontFamily) className.push(fontFamily);
  return (
    <span className={className.join(" ")}>{children}</span>
  );
}, (p, n) => {
  if (p.children !== n.children) return false;
  return true;
}); 

Text.displayName = "Text";

export default Text;