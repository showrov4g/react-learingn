export default function Friend(friend){
    const {name, email} = friend
    return(
        <div>
            <Li>Name:{name}</Li>
            <li>Email:{email} </li>
        </div>
    )
}