import classes from'./Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.friends}>
                <div>Friends</div>
                <div className={classes.friendsItem}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbTeW6ZigluoWxAPFoKzVghKEMTRjpxRRog&usqp=CAU'/>
                    <div>Artur</div>
                </div>
                <div className={classes.friendsItem}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltvBEVwZUC1nI-q-4QnueJjvDFPOrHqBWig&usqp=CAU'/>
                    <div>Dima</div>
                </div>
                <div className={classes.friendsItem}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt86sQ9Ya33SIwiA1tc4FGlpq1jqhimI_XVw&usqp=CAU'/>
                    <div>Vika</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;