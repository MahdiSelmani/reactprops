import React from "react";
import PropTypes from 'prop-types';

function Profile({ fullName, Profession, bio, children, handleName }) {



    return (
        <div style={{ textAlign: 'center' }}>
            <div >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>Name :</h1>
                    <h1 style={{ color: 'Brown' }}>{fullName}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <h1>Profession :</h1>
                    <h1 style={{ color: 'Brown' }}>{Profession}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <h1>Bio :</h1>
                    <h1 style={{ color: 'Brown' }}>{bio}</h1>
                </div>
                {children}
            </div>
            <button style={{ borderRadius: '20px', margin: '40px', height: "50px", width: "140px", fontSize: 'large' }} onClick={() => handleName(fullName)}>User name</button>

        </div>
    )
}
Profile.propTypes = {
    fullName: PropTypes.string,
    Profession: PropTypes.string,
    bio: PropTypes.string,
    children: PropTypes.node,
}
Profile.defaultProps = {
    fullName: "User User",
    Profession: "UI/UX Designer",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}
export default Profile;