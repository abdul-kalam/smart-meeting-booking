import React , {useState, useEffect} from "react";
import { InputProps } from "./FormInput.interface";
import { Input } from "./styles";

const FormInput: React.FC<InputProps.IProps> = props => {
    const { type, id, value, onChange } = props;
    const [inputVal, setInputVal] = useState(value);
    useEffect(()=>{
        onChange(inputVal);
    },[inputVal])
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        setInputVal(e.target.value);
    }
    const today = new Date().toISOString().slice(0, 10)
    const InputView = () => {
        if(type == 'date'){
            return <Input id={id} name={id} type={type} value={inputVal} min={today} onChange={onInputChange}/>
        } else if (type == 'time') {
            return <Input id={id} name={id} type={type} value={inputVal} min={"00:00"} max={"23:30"} step={"180"} required onChange={onInputChange}/>
        } else {
            return  <Input id={id} name={id} type={type} value={inputVal} onChange={onInputChange}/>
        }
    }
    return (
        <>
        {InputView()}
        </>
    );
};

export default FormInput;
