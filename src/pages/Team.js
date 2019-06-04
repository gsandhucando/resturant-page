import React, { useState } from 'react';
import Style from '../components/css/Team.module.css';
import EarlChefBio from '../components/EarlChefBio';

let Team = (props) => {
  let [showBio, handleBio] = useState(false);


  let teamStaffBack = [
    {name: 'EARL NINSOM',
    profile_url: "https://langbaanpdx.com/wp-content/uploads/2018/11/Earl.jpg",
    title: 'Executive Chef & Owner'},
    {name: 'BRANDON HIRAHARA',
    profile_url: "https://langbaanpdx.com/wp-content/uploads/2018/11/Brandon.jpg",
    title: 'Chef De Cuisine'},
    {name: 'KITSANARUK KETKUAVIRIYANONT',
    profile_url: "https://langbaanpdx.com/wp-content/uploads/2018/11/Pui.jpg",
    title: 'Sous Chef'}
  ]
  let teamStaffFront = [
    {name: 'JENNY KWOK',
    profile_url: "https://langbaanpdx.com/wp-content/uploads/2018/11/7.jpg",
    title: 'General Manager'},
    {name: 'JON LEWIS',
    profile_url: "https://langbaanpdx.com/wp-content/uploads/2018/11/9.jpg",
    title: 'Bar Manager'},
    {name: 'KAYLA MORRELL',
    profile_url: "https://langbaanpdx.com/wp-content/uploads/2019/02/13.jpg",
    title: 'Reservations Manager'}
  ]
  return(
    <div className={Style.teamContainer}>
      <EarlChefBio open={showBio} handleBio={handleBio}/>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <h3 className={Style.heading}>BACK OF HOUSE</h3>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      {teamStaffBack.map((bio, index) => {
        return <div onClick={()=> {index === 0 ? handleBio(true) : handleBio(false)}} key={bio.name} className={Style.profile}>
          <img className={Style.profileImg} key={index} src={bio.profile_url} />
          <h5>{bio.name}</h5>
          <h5 style={{color: '#333333', marginTop: '-40px'}}>{bio.title}</h5>
          </div>

      })}
      <div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <h3 className={Style.heading}>FRONT OF HOUSE</h3>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      </div>
      {teamStaffFront.map((bio, index) => {
        return <div className={Style.profile}>
          <img className={Style.profileImg} key={index} src={bio.profile_url} />
          <h5>{bio.name}</h5>
          <h5 style={{color: '#333333', marginTop: '-40px'}}>{bio.title}</h5>
          </div>

      })}
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
    </div>
  )
}

export default Team;