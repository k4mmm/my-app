import Profile from './Profile'

function ProfileList({ users }) {
   return ( <ul>
        {users.map(user => (
            <li key={user.id}>
                <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
            </li>
        ))}
    </ul>)
}

export default ProfileList;