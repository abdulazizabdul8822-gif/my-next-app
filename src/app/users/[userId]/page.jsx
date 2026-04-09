

const UsersDetailPage = async ({params}) => {

    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    return (
        <div>
            {user.name}
            <br />
            {user.email}
            <br />
            {user.phone}
            <br />
            {user.city}
        </div>
    );
};

export default UsersDetailPage;