import { Form, Input } from "antd";
const CustomInput = ({ divClass, name, divInputClass, labelClass, inpClass,  label, isPassword, disabled=false, value,  rules = [] }) => { 
    const InputComponent = isPassword ? Input.Password : Input;
    
    return (
        <>
         <div className={divClass}></div>
          <Form.Item
            name={name}
            rules={rules.length > 0 ? rules : [{ required: true, message: `Ingrese su ${label}` }]}
          >
            <div className={divInputClass}>
              <label className={labelClass}>
                {label}
              </label>
              <InputComponent
                placeholder={label}
                className={inpClass}
                disabled={disabled}
                value={value}
              />
            </div>
          </Form.Item>
        </>
       
    );
}

export default  CustomInput