import { Alert } from "antd";
const CustomAlert = ({ message, type, onClose, className, visible }) => {
  
  return (
    visible && (
      <Alert
        message={message}
        type={type}
        showIcon
        closable
        onClose={onClose}
        className={className}
      />
    )
  );
};
export default CustomAlert;
