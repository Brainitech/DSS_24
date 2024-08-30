import React, { useState } from "react"
import axios from "axios"
import "./form.css"

const Form = ({ buttonId }) => {
  const url = "https://dss24.onrender.com"
  const [registrationType, setRegistrationType] = useState("solo")
  const [data, setData] = useState({
    name: "",
    email: "",
    college: "",
    phone: "",
    teamName: "",
    teamCollege: "",
    numberOfMembers: 2,
    members: [
      { name: "", phone: "", email: "" },
      { name: "", phone: "", email: "" },
    ],
    isTeam: false,
    eventName: "",
  })

  const onChangeHandler = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }))
  }

  const onMemberChangeHandler = (index, event) => {
    const updatedMembers = data.members.map((member, i) => (i === index ? { ...member, [event.target.name]: event.target.value } : member))
    setData((data) => ({
      ...data,
      members: updatedMembers,
    }))
  }

  const addMember = () => {
    setData((data) => ({
      ...data,
      members: [...data.members, { name: "", phone: "", email: "" }],
    }))
  }

  const sendData = async (event) => {
    event.preventDefault()

    console.log(registrationType)

    try {
      if (registrationType === "solo") {
        setData((data) => ({
          ...data,
          isTeam: false,
        }))
      } else {
        setData((data) => ({
          ...data,
          isTeam: true,
        }))
      }

      const response = await axios.post(`${url}/api/v1/user/register`, data)
      if (response.data.success) {
        alert("Registration successful")
        setData({
          name: "",
          email: "",
          college: "",
          phone: "",
          teamName: "",
          teamCollege: "",
          numberOfMembers: 2,
          members: [
            { name: "", phone: "", email: "" },
            { name: "", phone: "", email: "" },
          ],
          isTeam: false,
          eventName: "",
        })
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const HideForm = () => {
    document.querySelector(".reg-form").style.display = "none"
  }
  const event = buttonId === "HnF" ? "Hack & Forge" : buttonId === "TQ" ? "Tech Quiz" : buttonId === "TH" ? "Treasure Trail" : "Coder's Cup"
  console.log(buttonId, event)

  React.useEffect(() => {
    setData((data) => ({
      ...data,
      eventName: event,
    }))
  }, [])

  return (
    <div className="reg-form absolute flex-col bgg backdrop-blur-md rounded-2xl items-center overflow-hidden cursor-none w-max md:w-[40vw] lg:w-[30vw]" style={{ display: `none` }}>
      <button
        onClick={HideForm}
        className="bg-gray-400 rounded-full px-[10px] pt-[4px] text-center border-black border-2 text-white self-end absolute mt-2 mr-2 hover:scale-110 transition-all duration-200"
      >
        X
      </button>
      <h2 className="font-bold text-white text-center mb-4 pt-8 pb-4 text-xl w-full bg-black bg-opacity-30">
        {event}
        <br />
        Register as:
      </h2>
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
                isTeam: false,
              }))
            }}
            className="hidden"
          />
          <span className="ml-2">Solo</span>
        </label>

        <label className={`relative cursor-none transition-all duration-100 ${registrationType === "team" ? "underline" : "hover:scale-110"}`}>
          <input
            type="radio"
            value="team"
            checked={registrationType === "team"}
            onChange={() => {
              setRegistrationType("team")
              setData((data) => ({
                ...data,
                isTeam: true,
              }))
            }}
            className="hidden"
          />
          <span className="ml-2">Team</span>
        </label>
      </div>

      <form className="form flex flex-col items-center" onSubmit={sendData}>
        {registrationType === "solo" && (
          <div className="flex flex-col justify-center items-center gap-8 mx-4 my-2 text-white">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-bold">
                Name{" "}
              </label>
              <input type="text" id="name" name="name" placeholder="Name" className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2" onChange={onChangeHandler} value={data.name} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                Email{" "}
              </label>
              <input type="email" id="email" name="email" placeholder="Email" className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2" onChange={onChangeHandler} value={data.email} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="college" className="font-bold">
                College{" "}
              </label>
              <input
                type="text"
                id="college"
                name="college"
                placeholder="College Name"
                className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                onChange={onChangeHandler}
                value={data.college}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-bold">
                Phone Number{" "}
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                onChange={onChangeHandler}
                value={data.phone}
              />
            </div>
          </div>
        )}

        {registrationType === "team" && (
          <div className="flex flex-col justify-center items-center gap-8 mx-4 my-2 text-white">
            <div className="flex flex-col">
              <label htmlFor="teamName" className="font-bold">
                Team Name{" "}
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                placeholder="Team Name"
                className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                onChange={onChangeHandler}
                value={data.teamName}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="teamCollege" className="font-bold">
                Team College{" "}
              </label>
              <input
                type="text"
                id="teamCollege"
                name="teamCollege"
                placeholder="College Name"
                className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                onChange={onChangeHandler}
                value={data.teamCollege}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="numberOfMembers" className="font-bold">
                Number of Members{" "}
              </label>
              <input
                type="number"
                id="numberOfMembers"
                name="numberOfMembers"
                min="2"
                max="6"
                className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                onChange={onChangeHandler}
                value={data.numberOfMembers}
                onBlur={() => {
                  const membersCount = Math.max(2, data.numberOfMembers)
                  setData((data) => ({
                    ...data,
                    members: data.members.slice(0, membersCount).concat(Array(Math.max(0, membersCount - data.members.length)).fill({ name: "", phone: "" })),
                  }))
                }}
              />
            </div>

            {data.members.map((member, index) => (
              <div key={index} className="flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col">
                  <label htmlFor={`memberName${index}`} className="font-bold">
                    Member {index + 1} Name{" "}
                  </label>
                  <input
                    type="text"
                    id={`memberName${index}`}
                    name="name"
                    placeholder="Member Name"
                    className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                    onChange={(event) => onMemberChangeHandler(index, event)}
                    value={member.name}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`memberEmail${index}`} className="font-bold">
                    Member {index + 1} Email{" "}
                  </label>
                  <input
                    type="email"
                    id={`memberEmail${index}`}
                    name="email"
                    placeholder="Email"
                    className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                    onChange={(event) => onMemberChangeHandler(index, event)}
                    value={member.email}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`memberPhone${index}`} className="font-bold">
                    Member {index + 1} Phone{" "}
                  </label>
                  <input
                    type="text"
                    id={`memberPhone${index}`}
                    name="phone"
                    placeholder="Phone Number"
                    className="rounded-md bg-gray-600 bg-opacity-30 border-gray-600 border-2"
                    onChange={(event) => onMemberChangeHandler(index, event)}
                    value={member.phone}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <button
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
