import React, {useState} from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import ReasonPage from './ReasonPage';
import WhyPage from './WhyPage';
import MentorPage from './MentorPage';
import MemberPage from '../MemberPage';

const Index : React.FC = () => {
    const [page, setPage] = useState('landing');

    const renderPage = () => {
        switch(page) {
            case 'landing': return <Landing />
            case 'reason': return <ReasonPage />
            case 'why': return <WhyPage/>
            case 'mentor': return <MentorPage />
            case 'member': return <MemberPage />
        }
    }
    return (
        <>
            <Navbar setPage={setPage} />
            {renderPage()}
        </>
    )
}

export default Index;