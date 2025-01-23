import { useState } from 'react';
import Candidate from '../interfaces/Candidate.interface.tsx';

const SavedCandidates = () => {
  const [candidateList, changeCandidateList] = useState<Candidate[]>(JSON.parse(localStorage.getItem('candidateList') || '[]'));

  function deleteCandidate(login: string) {
    const newList: Candidate[] = candidateList.filter((candidate: Candidate) => candidate.login !== login);
    localStorage.setItem('candidateList', JSON.stringify(newList));
    changeCandidateList(newList);
    console.log('Candidate deleted:');
  }
  if (candidateList.length !== 0) {
    return (
      <>
        <h1>Potential Candidates</h1>
        <table className='table'>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
          {candidateList.map((candidate: Candidate) => {
            return (
              <tr key={candidate.login}>
                <td><img src={candidate.avatar_url} width='100' height='100' /></td>
                <td>{candidate.name || candidate.login}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td>{candidate.email || 'N/A'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'N/A'}</td>
                <td><button className='minus' onClick={() => { deleteCandidate(candidate.login) }}>-</button></td>
              </tr>
            );
          })}
        </table>
      </>
    );
  } else {
    return(<p>No Candidates have been accepted</p>);
  }
};

export default SavedCandidates;

//{candidateList.map((candidate)=><th key={candidate}>{candidate}}</th>)}