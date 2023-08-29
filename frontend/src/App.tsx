import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { User } from './types';
import Table from './components/Table';
import Pagination from './components/Pagination';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [err, setErr] = useState<string | null>(null)
  const [isUpdate, setIsUpdate] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const [foundUser, setFoundUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage] = useState(10)
  const updateIDRef = useRef<HTMLInputElement | null>(null)
  const [formUpdateData, setFormUpdateData] = useState({
    name: '',
    avatar: '',
    hero_project: '',
    notes: '',
    email: '',
    phone: '',
    rating: ''
  });
  const [formAddData, setFormAddData] = useState({
    name: '',
    avatar: '',
    hero_project: '',
    notes: '',
    email: '',
    phone: '',
    rating: ''
  });

  const indexOfLastUser = currentPage * userPerPage
  const indexOfFirstUser = indexOfLastUser - userPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  useEffect(() => {
    if (foundUser) {
        setFormUpdateData({
            name: foundUser.name,
            avatar: foundUser.avatar,
            hero_project: foundUser.hero_project,
            notes: foundUser.notes,
            email: foundUser.email,
            phone: foundUser.phone,
            rating: foundUser.rating
        });
    }
  }, [foundUser]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bog/users')
    .then(res => {
      setUsers(res.data);
      console.log('asdff');
    })
    .catch(err => setErr(err));}

    , []
  )
  
  const handleFindId = () => {
    if (updateIDRef.current) {
      const nameVal = updateIDRef.current.value;
      const matchedUsers = users.filter(user => user.name === nameVal);
      
      if (matchedUsers.length > 0) {
        setFoundUser(matchedUsers[0]); 
        const { id, ...user } = matchedUsers[0];
        setFormUpdateData(user);
        setErr(null)
      } else {
        setFoundUser(null); 
        setErr('User with the given name was not found')
      }
    }
  }
  
  const handleUpdate = () => {
    if (foundUser) {
      setUsers(users => users.map(user => user.id === foundUser.id ? {...user, ...formUpdateData} : user));
      setLoading(true)
      axios.patch(`http://localhost:5000/api/bog/users/update/${foundUser.id}`, {...formUpdateData, id:foundUser.id}).then(res => console.log(res.data)).catch(err => console.log(err))
      setLoading(false)
      setFoundUser(null); 
      setIsUpdate(false)
    }
  };

  const handleDelete = (user: User) => {
    setUsers(users.filter(u => u.id !== user.id));
    setLoading(true)
    axios.delete(`http://localhost:5000/api/bog/users/${user.id}`).then(res => console.log(res.data)).catch(err => console.log(err))
    setLoading(false)
    setFoundUser(null); 
      setIsUpdate(false)
  }

  const handleAdd = () => {
    const newUser = { ...formAddData, id: (parseInt(users[users.length - 1].id) + 1).toString(), status: false}
    setLoading(true)
    axios.post('http://localhost:5000/api/bog/users', newUser).then(res => console.log(res.data))
    setLoading(false)
    setUsers(prev => [...prev, newUser])
    setFormAddData({
      name: '',
      avatar: '',
      hero_project: '',
      notes: '',
      email: '',
      phone: '',
      rating: ''
    });
    setIsAdd(false)
  }

  const handleUpdateShow = () => {
    setIsUpdate(!isUpdate)
    setFoundUser(null)
  }

  const handleAddShow = () => {
    setIsAdd(!isAdd)
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='p-2 mt-4'>
      
      <Table users={currentUsers} loading={loading}/>
      
      <Pagination userPerPage={userPerPage} totalUser={users.length} paginate={paginate}/>
      <AddUser handleAddShow={handleAddShow} handleAdd={handleAdd} setFormAddData={setFormAddData} isAdd={isAdd}/>
      <UpdateUser handleUpdateShow={handleUpdateShow} handleFindId={handleFindId} handleUpdate={handleUpdate} updateIDRef={updateIDRef} err={err}
                  setFormUpdateData={setFormUpdateData} isUpdate={isUpdate} foundUser={foundUser} formUpdateData={formUpdateData} handleDelete={handleDelete}/>  
    </div>
  );
}

export default App;