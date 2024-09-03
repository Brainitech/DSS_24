import React, { useState, useEffect } from "react"
import axios from "axios"
import "./form.css"
import Loader from "/Loader.gif"

const Form = ({ buttonId }) => {
  const [registrationType, setRegistrationType] = useState("solo")
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    teamName: "",
    teamCollege: "",
    yearOfCollege: "1st",
    numberOfMembers: 1,
    members: [{ name: "", phone: "", email: "" }],
    eventRegistrationType: "solo",
    eventName: null,
  })

  const onChangeHandler = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }))
  }

  const onMemberChangeHandler = (index, event) => {
    const { name, value } = event.target;

    const updatedMembers = data.members.map((member, i) => (i === index ? { ...member, [name]: value } : member))
    setData((data) => ({
      ...data,
      members: updatedMembers,
    }))
  }

  const HideForm = () => {
    document.querySelector(".reg-form").style.display = "none"
  }
  const event = buttonId === "HnF" ? "Hack n Forge" : buttonId === "TQ" ? "Tech Quiz" : buttonId === "TH" ? "Treasure Trail" : buttonId === "CC" ? "Coder's Cup" : null

  useEffect(() => {
    // console.log(event);
    if (event) {
      setData((data) => ({
        ...data,
        eventName: event,
      }))
    }
  }, [event])
  
  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  }

  const validateName = (name) => {
    return name.trim().length > 0 && name.trim().length <= 30;
  }

  const validateEmail = (email) => {
    return email.trim().length > 0 && email.trim().length <= 40 && /\S+@\S+\.\S+/.test(email);
  }

  const validateMember = (member) => {
    return validateName(member.name) && validatePhone(member.phone) && validateEmail(member.email);
  }

  const isFormValid = () => {
    if (registrationType === "solo") {
      return validateMember(data.members[0]) && data.teamCollege.trim() !== "";
    } else if (registrationType === "team") {
      return (
        data.teamName.trim() !== "" &&
        data.teamCollege.trim() !== "" &&
        data.members.every(validateMember)
      );
    }
    return false;
  }

  const handleSubmit = () => {
    console.log("Submit button clicked for", event, "on", registrationType, "registration")
    // document.querySelector(".form-loader").style.display = "flex"
  }

  const sendData = async (event) => {
    console.log(data);
    event.preventDefault();
    
    if (!isFormValid()) {
      console.log("Please fill all fields correctly before submitting.");
      alert("Please fill all fields correctly before submitting.");
      return;
    }
    setIsLoading(true);

    try {
      setData((data) => ({
        ...data,
        eventRegistrationType: registrationType,
      }))

      const membersData = data.members.map(member => [
        new Date().toLocaleString(),
        data.eventRegistrationType,
        data.teamName,
        data.teamCollege,
        data.yearOfCollege,
        member.name,
        member.email,
        member.phone,
      ])

      membersData.map(async (memberRow) => {
        try {
          console.log(memberRow);          
          const response = await axios.post(`https://v1.nocodeapi.com/ktejas04/google_sheets/BrVWVtKdfVfbdriJ?tabId=${data.eventName}`, [memberRow], {
            headers: {
              "Content-Type": "application/json",
            },
          })
          if (response.data)
            return response.data // or any relevant data you want to return
        } catch (error) {
          console.error(error);
          alert("An error occurred while submitting the form. Please re-submit.");
          return;
        }
      })
      
      
      alert("Registration successful");
      setRegistrationType("solo")
      HideForm()

      setData((data) => ({
        ...data,
        teamName: "",
        teamCollege: "",
        yearOfCollege: "1st",
        numberOfMembers: 1,
        members: [{ name: "", phone: "", email: "" }],
        eventRegistrationType: "solo"
      }))
    } catch (error) {
      console.log(error);
      alert("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className="reg-form absolute bgg flex flex-col items-center justify center text-white font-bold rounded-2xl h-[80vh] cursor-none w-max md:w-[40vw] lg:w-[30vw] overflow-hidden"
      style={{ display: `none` }}
    >
      <h2 className="flex flex-col text-center text-2xl mb-4 pt-8 pb-4 bg-black w-full rounded-t-2xl bg-opacity-50">
        {event}
        <br />
        Register as:
      </h2>
      <button
        onClick={HideForm}
        className="bg-gray-400 rounded-full px-[10px] pt-[4px] text-center border-black border-2 text-white self-end absolute mt-2 mr-2 hover:scale-110 transition-all duration-200"
      >
        X
      </button>
      <div className="text-white flex gap-16 font-bold mb-4">
        <label className={`relative cursor-none transition-all duration-100 ${registrationType === "solo" ? "underline" : "hover:scale-110"}`}>
          <input
            type="radio"
            value="solo"
            checked={registrationType === "solo"}
            onChange={() => {
              setRegistrationType("solo")
              setData((data) => ({
                ...data,
                numberOfMembers: 1,
                members: [{ name: "", phone: "", email: "" }],
                eventRegistrationType: "solo",
              }))
            }}
            className="hidden"
          />
          <span className="ml-2">Solo</span>
        </label>
        {event !== "Coder's Cup" && (
          <label className={`relative cursor-none transition-all duration-100 ${registrationType === "team" ? "underline" : "hover:scale-110"}`}>
            <input
              type="radio"
              value="team"
              checked={registrationType === "team"}
              onChange={() => {
                setRegistrationType("team")
                setData((data) => ({
                  ...data,
                  numberOfMembers: 2,
                  members: [
                    { name: "", phone: "", email: "" },
                    { name: "", phone: "", email: "" },
                  ],
                  eventRegistrationType: "team",
                }))
              }}
              className="hidden"
            />
            <span className="ml-2">Team</span>
          </label>
        )}
      </div>

      <form className="form overflow-scroll  [&::-webkit-scrollbar]:hidden [scrollbar-width]:hidden [-ms-overflow-style]:hidden flex flex-col items-center justify-start gap-8 " onSubmit={sendData}>
        {registrationType === "solo" && (
          <>
            <div className="flex flex-col mx-8">
              <label htmlFor="memberName">Name </label>
              <input
                type="text"
                id="memberName"
                className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                name="name"
                onChange={(event) => onMemberChangeHandler(0, event)}
                value={data.members[0].name}
                placeholder="Full Name"
                maxLength={30}
                pattern="[A-Za-z\s]+"
                title="Please enter only alphabets"
              />
            </div>
            <div className="flex flex-col mx-8">
              <label htmlFor="teamCollege">College</label>
              <input
                type="text"
                id="teamCollege"
                placeholder="College"
                className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                name="teamCollege"
                onChange={onChangeHandler}
                value={data.teamCollege}
                pattern="[A-Za-z\s]+"
                title="Please enter only alphabets"
              />
            </div>
            <div className="flex flex-col mx-8">
              <label htmlFor="yearOfCollege">Year of College</label>
              <select
                id="yearOfCollege"
                name="yearOfCollege"
                placeholder="Year"
                className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                onChange={onChangeHandler}
                value={data.yearOfCollege}
              >
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
              </select>
            </div>
            <div className="flex flex-col mx-8">
              <label htmlFor="memberEmail">Email </label>
              <input
                type="email"
                id="memberEmail"
                className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                name="email"
                onChange={(event) => onMemberChangeHandler(0, event)}
                value={data.members[0].email}
                placeholder="Email"
                maxLength={35}
              />
            </div>
            <div className="flex flex-col mx-8">
              <label htmlFor="memberPhone">Phone </label>
              <input
                type="tel"
                id="memberPhone"
                className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                name="phone"
                onChange={(event) => onMemberChangeHandler(0, event)}
                value={data.members[0].phone}
                placeholder="Phone"
                pattern="\d{10}"
                maxLength={10}
                title="Please enter 10 digits"
              />
            </div>
          </>
        )}

        {registrationType === "team" && (
          <>
            <div className="flex flex-col mx-8">
              <label htmlFor="teamName">Team Name </label>
              <input type="text" id="teamName" name="teamName" className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50" onChange={onChangeHandler} value={data.teamName} />
            </div>
            <div className="flex flex-col mx-8">
              <label htmlFor="teamCollege">College </label>
              <input 
                type="text"
                id="teamCollege" 
                name="teamCollege" 
                className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50" 
                onChange={onChangeHandler} 
                value={data.teamCollege} 
                pattern="[A-Za-z\s]+"
                title="Please enter only alphabets" />
            </div>
            <div className="flex flex-col mx-8">
              <label htmlFor="yearOfCollege">Year of College</label>
              <select id="yearOfCollege" name="yearOfCollege" className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50" onChange={onChangeHandler} value={data.yearOfCollege}>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
              </select>
            </div>
            <div className="flex flex-col mx-8">
              <label htmlFor="numberOfMembers">Number of Members </label>
              <input
                type="number"
                id="numberOfMembers"
                name="numberOfMembers"
                className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                min="2"
                max="3"
                onChange={onChangeHandler}
                value={data.numberOfMembers}
                onBlur={() => {
                  let { numberOfMembers } = data

                  // Clamp the numberOfMembers value between 2 and 3
                  numberOfMembers = Math.min(Math.max(numberOfMembers, 2), 3)

                  setData((data) => ({
                    ...data,
                    numberOfMembers,
                    members: data.members.slice(0, numberOfMembers).concat(Array(Math.max(0, numberOfMembers - data.members.length)).fill({ name: "", phone: "", email: "" })),
                  }))
                }}
              />
            </div>

            {data.members.map((member, index) => (
              <div key={index}>
                <div className="flex flex-col mx-8">
                  <label htmlFor={`memberName${index}`}>Member {index + 1} Name </label>
                  <input
                    type="text"
                    id={`memberName${index}`}
                    className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                    name="name"
                    onChange={(event) => onMemberChangeHandler(index, event)}
                    value={member.name}
                    maxLength={30}
                    pattern="[A-Za-z\s]+"
                    title="Please enter only alphabets"
                  />
                </div>
                <div className="flex flex-col mx-8">
                  <label htmlFor={`memberEmail${index}`}>Member {index + 1} Email </label>
                  <input
                    type="email"
                    id={`memberEmail${index}`}
                    className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                    name="email"
                    onChange={(event) => onMemberChangeHandler(index, event)}
                    value={member.email}
                    maxLength={35}
                  />
                </div>
                <div className="flex flex-col mx-8">
                  <label htmlFor={`memberPhone${index}`}>Member {index + 1} Phone </label>
                  <input
                    type="tel"
                    id={`memberPhone${index}`}
                    className="rounded-md border-gray-500 border-2 bg-gray-500 bg-opacity-50"
                    name="phone"
                    onChange={(event) => onMemberChangeHandler(index, event)}
                    value={member.phone}
                    pattern="\d{10}"
                    maxLength={10}
                    title="Please enter only numbers"
                  />
                </div>
              </div>
            ))}
          </>
        )}

        <button
          onClick={handleSubmit}
          type="submit"
          className="submit-btn bg-gradient-to-tr from-[#533377] to-[#8c35dd] w-max text-center px-8 py-[0.25rem] rounded-md my-4 font-bold text-white hover:scale-110 transition-all duration-300 cursor-none"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
