import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function PatchQuotationHR() {
  const [name, setName] = useState("");
  const [jobRole, setjobRole] = useState("");
  const [experience, setexperience] = useState("");
  const [hourlyRate, sethourlyRate] = useState("");
  const Navigate = useNavigate();

  const { id } = useParams(); // get the id parameter from the URL

  useEffect(() => {
    axios
      .get(`https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM/${id}`)
      .then(response => {
        const quotationCMP = response.data.data.newQuotationHRM;
        setName(quotationCMP.name);
        setjobRole(quotationCMP.jobRole);
        setexperience(quotationCMP.experience);
        sethourlyRate(quotationCMP.hourlyRate);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handlejobRoleChange = event => {
    setjobRole(event.target.value);
  };

  const handleexperienceChange = event => {
    setexperience(event.target.value);
  };

  const handlehourlyRateChange = event => {
    sethourlyRate(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const quotationCMP = {
      name: name,
      jobRole: jobRole,
      experience: experience,
      hourlyRate: hourlyRate
    };

    axios
      .patch(`https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM/${id}`, quotationCMP)
      .then(response => {
        Navigate("/viewHR");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Patch QuotationCMP</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name || ""} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          CMP ID:
          <input type="text" value={jobRole || ""} onChange={handlejobRoleChange} />
        </label>
        <br />
        <label>
          experience:
          <input type="text" value={experience || ""} onChange={handleexperienceChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={hourlyRate || ""} onChange={handlehourlyRateChange} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PatchQuotationHR;
