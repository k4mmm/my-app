import ProfileList from "./components/ProfileList";
import usersList from './user.json'

export default function App() {
    return (<div>
        <ProfileList users={usersList}/>
    </div>)
}