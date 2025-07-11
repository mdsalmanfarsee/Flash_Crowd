
import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import AddEvent from './pages/AddEvent.jsx';
import UpComingEvent from './components/UpcomingEvent.jsx';
import OngoingEvent from './components/OngoingEvent.jsx';
import Event from './pages/Event.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/events">
          <Route index path='' element={<Event />} />
          <Route path='history' element={<h1>third</h1>} />
          <Route path='create' element={<AddEvent />} />
          <Route path=':id' element={<h1>second</h1>} />
        </Route>
        {/* <Route path="/upcoming-event" element={<EventsList />} />
        <Route path="/ongoing-event" element={<OngoingEvent />} /> */}
      </Routes>
    </>
  )
}

export default App
