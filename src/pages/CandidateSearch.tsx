import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface.tsx';

const CandidateSearch = () => {
  const [profile, setProfile] = useState<Candidate>({} as Candidate);
  useEffect(() => {
    if ((localStorage.getItem('profileList') === '[]' || localStorage.getItem('profileList') === null) && ((localStorage.getItem('candidateList') === '[]' || localStorage.getItem('candidateList') === null))) {
      searchGithub().then((answer) => {
        localStorage.setItem('profileList', JSON.stringify(answer));
        searchGithubUser(answer[0].login).then((nextAnswer) => { setProfile(nextAnswer as Candidate) });
      })
    } else {
      const profileList = JSON.parse((localStorage.getItem('profileList') ?? '[]'));
      if (profileList.length !== 0) {
        console.log(profileList[0].login);
        searchGithubUser(profileList[0].login).then((nextAnswer) => { setProfile(nextAnswer as Candidate) });
      } else {
        setProfile({} as Candidate);
      }
    }
  }, []);
  function accept() {
    const candidateList = JSON.parse((localStorage.getItem('candidateList') ?? '[]'));
    candidateList.push(profile);
    localStorage.setItem('candidateList', JSON.stringify(candidateList));
    nextProfile();
  }
  function nextProfile() {
    const profileList = JSON.parse((localStorage.getItem('profileList') ?? '[]'));
    profileList.shift()
    if (profileList.length !== 0) {
      searchGithubUser(profileList[0].login).then((nextAnswer) => { setProfile(nextAnswer as Candidate) });
    } else {
      setProfile({} as Candidate);
    }
    localStorage.setItem('profileList', JSON.stringify(profileList));
  }

  if (Object.keys(profile).length !== 0) {
    return (
      <>
        <div>
          <h1>CandidateSearch</h1>
          <img src={profile.avatar_url} height='400' width='400' />
          <h2>{profile.name || profile.login}</h2>
          <p>Location: {profile.location || 'N/A'}</p>
          <p>Email: {profile.email ? (<a href={profile.email}>{profile.email}</a>) : ('N/A')}</p>
          <p>Company: {profile.company || 'N/A'}</p>
          <p>Bio: {profile.bio || 'N/A'}</p>
        </div>
        <div>
          <button onClick={nextProfile}>-</button>
          <button onClick={accept}>+</button>
        </div >
      </>
    )
  } else {
    if (localStorage.getItem('profileList') === '[]' || localStorage.getItem('profileList') === null){
      return (<p>No More Candidates are available</p>);
    }
    else {
      console.log("here hre");
      nextProfile();
    }
  }

};

export default CandidateSearch;

//style='background-color:red;border-radius:50%;'
