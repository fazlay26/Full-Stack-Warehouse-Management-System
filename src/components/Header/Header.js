import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='sticky top-0 bg-white px-12 py-5 flex  justify-center md:justify-between z-10 items-center'>
            <div className='hidden
             md:block'>
                <div className='flex items-center'>
                    {/* <img className='w-1/12 h-1/2' src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png" alt="" /> */}
                    <Link className='font-sans font-bold text-xl text-gray-600' to={'/'}>Bike manager</Link>
                </div>
            </div>
            <div className='md:flex gap-4 text-xl'>
                <ActiveLink className="hover-underline-animation" to={'/Home'}>Home</ActiveLink>
                {/* <ActiveLink to={'/login'}>Login</ActiveLink> */}
                {/* <CustomLink to={'/Login'}>Login</CustomLink> */}
                {user ? <button className='hover-underline-animation' onClick={() => signOut(auth)}>LogOut ({user.email})</button> : <ActiveLink to={'/Login'}>Login</ActiveLink>
                }
                {user ? <ActiveLink className="hover-underline-animation" to={'/myItem'}>My Item</ActiveLink> : ''
                }
                {user ? <ActiveLink className="hover-underline-animation" to={'/manageInventory'}>Manage Items</ActiveLink> : ''
                }
                {user ? <ActiveLink className="hover-underline-animation" to={'/addItem'}>Add Items</ActiveLink> : ''
                }

                <ActiveLink className="hover-underline-animation" to={'/blogs'}>Blogs</ActiveLink>


            </div>

        </div>
    );
};

export default Header;