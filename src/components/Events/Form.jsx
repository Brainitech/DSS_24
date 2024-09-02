import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {

  const [registrationType, setRegistrationType] = useState('solo');
  const [data, setData] = useState({
    teamName: "",
    teamCollege: "",
    yearOfCollege: "1st",
    numberOfMembers: 1,
    members: [{ name: "", phone: "", email: "" }],
    eventRegistrationType: "solo",
    eventName: "Hack n Forge",
  });

  const onChangeHandler = (event) => {
    setData(data => ({
      ...data,
      [event.target.name]: event.target.value
    }));
  }

  const onMemberChangeHandler = (index, event) => {
    const updatedMembers = data.members.map((member, i) => 
      i === index ? { ...member, [event.target.name]: event.target.value } : member
    );
    setData(data => ({
      ...data,
      members: updatedMembers
    }));
  }

  const sendData = async (event) => {
    event.preventDefault();
    
    try {      
        setData(data => ({
            ...data,
            eventRegistrationType: registrationType
        }));

        // console.log(data);
        

        const membersData = data.members.map((member, index) => [
            index === 0 ? new Date().toLocaleString() : "",  
            index === 0 ? data.eventRegistrationType : "",   
            index === 0 ? data.teamName : "",                
            index === 0 ? data.teamCollege : "",             
            index === 0 ? data.yearOfCollege : "",           
            member.name,                                     
            member.email,                                    
            member.phone                                     
        ]);

        

        membersData.map(async (memberRow) =>  {
          try {
            const response = await axios.post(
              `https://v1.nocodeapi.com/ktejas04/google_sheets/BrVWVtKdfVfbdriJ?tabId=${data.eventName}`,
              [memberRow],
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            return response.data; // or any relevant data you want to return
          } catch (error) {
            alert(error);
          }
      })

        alert("Registration successful");
        setRegistrationType("solo");

        setData(data => ({
            ...data,
            teamName: "",
            teamCollege: "",
            yearOfCollege: "",
            numberOfMembers: 1,
            members: [{ name: "", phone: "", email: "" }],
            eventRegistrationType: "solo",
            eventName: "Hack n Forge",
        }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex-col backdrop-blur-md rounded-2xl items-center h-full justify-center overflow-hidden h-[80vh] cursor-none w-max md:w-[40vw] lg:w-[30vw]" >
      <h2 className="font-bold text-white text-center mb-4 pt-8 pb-4 text-xl  w-full bg-black bg-opacity-30">Register as:</h2>
      <div className="text-white p-4 flex gap-16 font-bold mb-4">
        <label className={`relative cursor-none transition-all duration-100 ${registrationType === "solo" ? "underline" : "hover:scale-110"}`}>
          <input
          className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
            type="radio"
            value="solo"
            checked={registrationType === 'solo'}
            onChange={() => {
              setRegistrationType('solo');
              setData(data => ({
                ...data,
                numberOfMembers: 1,
                members: [{ name: "", phone: "", email: "" }],
                eventRegistrationType: 'solo'
              }));
            }}
          />
          Solo
        </label>
        <label className={`relative cursor-none transition-all duration-100 ${registrationType === "team" ? "underline" : "hover:scale-110"}`}>
          <input
          className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
            type="radio"
            value="team"
            checked={registrationType === 'team'}
            onChange={() => {
              setRegistrationType('team');
              setData(data => ({
                ...data,
                numberOfMembers: 2,
                members: [{ name: "", phone: "", email: "" }, { name: "", phone: "", email: "" }],
                eventRegistrationType: 'team'
              }));
            }}
          />
          Team
        </label>
      </div>

      <form className='form' onSubmit={sendData}>
        <label htmlFor="teamName" className="font-bold">Team Name </label>
        <input
        className="rounded-md bg-gray-600 m-4 bg-opacity-30 border-gray-600 border-2"
          type="text"
          id="teamName"
          name="teamName"
          onChange={onChangeHandler}
          value={data.teamName}
        />

        <label htmlFor="teamCollege" className="font-bold">College </label>
        <input
        className="rounded-md bg-gray-600 m-4 bg-opacity-30 border-gray-600 border-2"
          type="text"
          id="teamCollege"
          name="teamCollege"
          onChange={onChangeHandler}
          value={data.teamCollege}
        />

        <label htmlFor="yearOfCollege" className="font-bold">Year of College</label>
        <select
            id="yearOfCollege"
            name="yearOfCollege"
            onChange={onChangeHandler}
            value={data.yearOfCollege}
        >
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
        </select>         

        {registrationType === 'solo' && (
          <>
            <label htmlFor="memberName" className="font-bold">Name </label>
            <input
            className="rounded-md bg-gray-600 m-4 bg-opacity-30 border-gray-600 border-2"
              type="text"
              id="memberName"
              name="name"
              onChange={(event) => onMemberChangeHandler(0, event)}
              value={data.members[0].name}
            />

            <label htmlFor="memberEmail" className="font-bold">Email </label>
            <input
            className="rounded-md bg-gray-600 m-4 bg-opacity-30 border-gray-600 border-2"
              type="email"
              id="memberEmail"
              name="email"
              onChange={(event) => onMemberChangeHandler(0, event)}
              value={data.members[0].email}
            />

            <label htmlFor="memberPhone" className="font-bold">Phone </label>
            <input
            className="rounded-md bg-gray-600 m-4 bg-opacity-30 border-gray-600 border-2"
              type="text"
              id="memberPhone"
              name="phone"
              onChange={(event) => onMemberChangeHandler(0, event)}
              value={data.members[0].phone}
            />
          </>
        )}

        {registrationType === 'team' && (
            <>
                <label htmlFor="numberOfMembers" className="font-bold">Number of Members </label>
                <input
                className="rounded-md bg-gray-600 m-4 bg-opacity-30 border-gray-600 border-2"
                type="number"
                id="numberOfMembers"
                name="numberOfMembers"
                min="2"
                max="6"
                onChange={onChangeHandler}
                value={data.numberOfMembers}
                onBlur={() => {
                    const {numberOfMembers} = data;
                    setData(data => ({
                    ...data,
                    members: data.members.slice(0, numberOfMembers).concat(
                        Array(Math.max(0, numberOfMembers - data.members.length)).fill({ name: "", phone: "" , email: "" })
                    )
                    }));
                }}
                />

            {
                data.members.map((member, index) => (
                    <div key={index}>
                      <label htmlFor={`memberName${index}`}>Member {index + 1} Name </label>
                      <input
                      className="rounded-md m-4 bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                        type="text"
                        id={`memberName${index}`}
                        name="name"
                        onChange={(event) => onMemberChangeHandler(index, event)}
                        value={member.name}
                      />
          
                      <label htmlFor={`memberEmail${index}`}>Member {index + 1} Email </label>
                      <input
                      className="rounded-md m-4 bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                        type="email"
                        id={`memberEmail${index}`}
                        name="email"
                        onChange={(event) => onMemberChangeHandler(index, event)}
                        value={member.email}
                      />
          
                      <label htmlFor={`memberPhone${index}`}>Member {index + 1} Phone </label>
                      <input
                      className="rounded-md m-4 bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                        type="text"
                        id={`memberPhone${index}`}
                        name="phone"
                        onChange={(event) => onMemberChangeHandler(index, event)}
                        value={member.phone}
                      />                
                    </div>
                  ))
            }
            </>

        )}
        
        <button type='submit' className="submit-btn bg-gradient-to-tr from-[#533377] to-[#8c35dd] w-max text-center px-8 py-[0.25rem] rounded-md my-4 font-bold text-white hover:scale-110 transition-all duration-300 cursor-none">Submit</button>
      </form>
    </div>
  )
}

export default Form;
