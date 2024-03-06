import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../reducers/cartReducer';
import { useEffect } from 'react';

const UserList = () => {
    const dispatch = useDispatch();
    // const { data, status, error } = useSelector((state) => state.cartItems);

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [dispatch]);

    // if (status === 'loading') {
    //     return <p>Loading...</p>;
    // }

    // if (status === 'failed') {
    //     return <p>Error: {error}</p>;
    // }

    return (
        <div>
            <h2>User List</h2>
            {/* <ul>
                {data.map((user) => (
                    <li key={user.id}>Name: {user.name} and ID: {user.id}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default UserList;
