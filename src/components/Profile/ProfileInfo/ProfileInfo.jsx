import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.headband}>
                <img src='https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;