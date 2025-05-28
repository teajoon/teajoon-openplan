import { Oval } from "react-loader-spinner";

type TSpinnerProps = {
  size?: string;
  color?: string;
  secondaryColor?: string;
}

export const Spinner = ({
  size = "30",
  color = "var(--color-primary)", secondaryColor = "transparent"
}: TSpinnerProps) => {
  return (
    <Oval visible={true}
      height={size} width={size}
      color={color} secondaryColor={secondaryColor}
      ariaLabel="oval-loading"
    />
  );
}
