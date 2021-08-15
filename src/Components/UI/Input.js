import classes from './Card/Input.module.css';

const Input = props =>{
    return <div className = {classes.input}>
        <label htmlFor = {props.input.id}>Amount</label>
        <input id = {props.input.id} {...props.input}></input>
    </div>
}
export default Input;