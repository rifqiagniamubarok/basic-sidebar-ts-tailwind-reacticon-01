import { AiOutlineDashboard, AiOutlineContainer, AiOutlineTeam, AiOutlineMail, AiOutlineContacts } from 'react-icons/ai';
import { SideBar } from './components';

const navItems = [
  { href: '/admin', icon: AiOutlineDashboard, label: 'dashboard' },
  { href: '/admin/posts', icon: AiOutlineContainer, label: 'dashboard' },
  { href: '/admin/users', icon: AiOutlineTeam, label: 'dashboard' },
  { href: '/admin/comments', icon: AiOutlineMail, label: 'dashboard' },
  { href: '/admin/contacts', icon: AiOutlineContacts, label: 'contacts' },
];

function App() {
  return (
    <div className="flex">
      <div>
        <SideBar navItems={navItems} />
      </div>
      <div className="max-h-screen mx-10 mt-5 overflow-auto">
        <p className="text-2xl text-black">Hello</p>
      </div>
    </div>
  );
}

export default App;
