import {  Button } from "antd";
const CustomButton = ({ text, className, htmlType = "button", onClick =undefined  }) => {
  
  return (
    <Button className={className} htmlType={htmlType ? htmlType : undefined} onClick={onClick ? onClick : undefined} >
      {text}
    </Button>
  );
};
export default CustomButton;
