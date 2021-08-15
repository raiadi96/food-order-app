import {Fragment} from 'react';
import mealsHeadeImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import CardButton from './CartButton';

const Header = (props) => {

    return <Fragment>
        <header className = {classes.header}>
            <h1>React Meals!!</h1>
            <CardButton></CardButton>
        </header>
        <div className = {classes['main-image']}>
            <img src = {mealsHeadeImg} alt = "A table full of Headers"/>
        </div>
    </Fragment>
}
export default Header;