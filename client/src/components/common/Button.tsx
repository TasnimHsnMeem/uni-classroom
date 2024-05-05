import styled from "@emotion/styled";
interface IButtonProps {
  children?: React.ReactNode;
  [x: string]: any;
}

const Button: React.FC<IButtonProps> = ({ children, disabled, ...rest }) => {
  return <CustomButton disabled={disabled} {...rest}>{children}</CustomButton>;
};

export const CustomButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 28px;
  gap: 10px;
  height: 42px;
  background: ${(Props) => (Props?.color === "alert" ? "#da3923" : "inherit")};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  border: ${(Props) =>
    Props?.color === "alert" ? "none" : "1px solid #dcdcdc"};
  border-radius: 4px;
  color: ${(Props) => (Props?.color === "alert" ? "#ffffff" : "#606164")};
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
export default Button;
