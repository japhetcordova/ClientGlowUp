import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Card from "../components/card";

const Home = () => {
  return (
    <div className="min-h-screen flex bg-[#e0e5ec]">
      {/* Sidebar */}
        <Sidebar
            header={<h1 className="text-lg font-bold">🌿 NeumoApp</h1>}

            primaryLinks={
                <>
                <button className="text-left hover:underline text-xs">🏠 Dashboard</button>
                <button className="text-left hover:underline text-xs">📊 Reports</button>
                <button className="text-left hover:underline text-xs">📁 Projects</button>
                </>
            }

            groupedLinks={
                <>
                <button className="text-left hover:underline text-xs">👥 Users</button>
                <button className="text-left hover:underline text-xs">🗂 Teams</button>
                </>
            }

            utilityLinks={
                <>
                <button className="text-left hover:underline text-xs">❓ Help</button>
                <button className="text-left hover:underline text-xs">📄 Docs</button>
                </>
            }

            footer={
                <button className="text-left hover:underline text-xs">🔒 Logout</button>
            }
        />


      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar
      brand={<span>🌿 NeumoApp</span>}
      navLinks={
        <>
          <button className="hover:underline">Home</button>
          <button className="hover:underline">Docs</button>
          <button className="hover:underline">Pricing</button>
        </>
      }
      search={
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 rounded-lg bg-[#e0e5ec] w-40 
                     shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]
                     text-sm focus:outline-none"
        />
      }
      toggle={
        <button title="Toggle Theme" className="text-xl">🌓</button>
      }
      profile={
        <div className="flex items-center gap-2">
          <img
            src="/avatar.png"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-gray-400"
          />
          <span className="text-sm font-medium hidden sm:inline">John</span>
        </div>
      }
    />

        {/* Page Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Welcome">
            <p>👋 Hello, welcome to your dashboard.</p>
          </Card>
          <Card title="Analytics">
            <p>📈 1,024 page views today</p>
          </Card>
          <Card title="Tasks">
            <ul className="list-disc pl-4">
              <li>Fix login bug</li>
              <li>Update pricing section</li>
              <li>Review feedback</li>
            </ul>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Home;
