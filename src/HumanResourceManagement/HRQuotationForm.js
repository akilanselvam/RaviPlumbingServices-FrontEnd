import React, { useState, useEffect } from "react";
import axios from "axios";

function HRQuotationForm() {
  const [jobRoles, setJobRoles] = useState([]);
  const [selectedJobRole, setSelectedJobRole] = useState("");
  const [employees, setEmployees] = useState([]);
  const [rows, setRows] = useState([]);
  const [newJobRole, setNewJobRole] = useState("");

  useEffect(() => {
    // Get all job roles
    axios
      .get("https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM")
      .then(response => {
        if (response.data.status === "Success") {
          const jobRoles = response.data.data.newQuotationHRM.map(employee => employee.jobRole);
          setJobRoles([...new Set(jobRoles)]); // Get unique job roles
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedJobRole) {
      // Get employees by selected job role
      axios
        .get(`https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM/jobRole/${selectedJobRole}`)
        .then(response => {
          if (response.data.status === "Success") {
            setEmployees(response.data.data.newQuotationHRM);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [selectedJobRole]);

  const handleJobRoleChange = (event, index) => {
    const newRows = [...rows];
    newRows[index] = {
      ...newRows[index],
      jobRole: event.target.value,
      employee: "",
      hourlyRate: 0,
      numberOfHours: 0,
      totalRate: 0
    };
    setRows(newRows);
    setSelectedJobRole(event.target.value);
  };

  const handleEmployeeChange = (event, index) => {
    const newRows = [...rows];
    const employee = employees.find(employee => employee._id === event.target.value);
    newRows[index] = {
      ...newRows[index],
      employee: employee ? employee._id : "",
      hourlyRate: employee ? employee.hourlyRate : 0,
      numberOfHours: 0,
      totalRate: 0
    };
    setRows(newRows);
  };

  const handleHourlyRateChange = (event, index) => {
    const newRows = [...rows];
    const currentRow = newRows[index];
    const hourlyRate = parseFloat(event.target.value) || 0;
    const numberOfHours = currentRow.numberOfHours || 0;
    newRows[index] = {
      ...currentRow,
      hourlyRate,
      totalRate: hourlyRate * numberOfHours
    };
    setRows(newRows);
  };

  const handleNumberOfHoursChange = (event, index) => {
    const newRows = [...rows];
    const currentRow = newRows[index];
    const numberOfHours = parseFloat(event.target.value) || 0;
    const hourlyRate = currentRow.hourlyRate || 0;
    newRows[index] = {
      ...currentRow,
      numberOfHours,
      totalRate: hourlyRate * numberOfHours
    };
    setRows(newRows);
  };

  const handleAddRow = () => {
    const newRows = [...rows];
    newRows.push({
      jobRole: "",
      employee: "",
      hourlyRate: 0,
      numberOfHours: 0,
      totalRate: 0
    });
    setRows(newRows);
  };

  const handleRemoveRow = index => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleNewJobRoleChange = event => {
    setNewJobRole(event.target.value);
  };

  const handleNewJobRoleSubmit = event => {
    event.preventDefault();
    // Add new job role
    axios
      .post("https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM/jobRole", {
        jobRole: newJobRole
      })
      .then(response => {
        if (response.data.status === "Success") {
          setJobRoles([...jobRoles, newJobRole]); // Add new job role to list
          setNewJobRole(""); // Clear input field
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>HR Quotation Form</h2>
      <form onSubmit={handleNewJobRoleSubmit}>
        <label>
          New Job Role:
          <input type="text" value={newJobRole} onChange={handleNewJobRoleChange} />
        </label>
        <button type="submit">Add Job Role</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Job Role</th>
            <th>Employee</th>
            <th>Hourly Rate</th>
            <th>Number of Hours</th>
            <th>Total Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <select value={row.jobRole} onChange={event => handleJobRoleChange(event, index)}>
                  <option value="">Select Job Role</option>
                  {jobRoles.map((jobRole, index) => (
                    <option key={index} value={jobRole}>
                      {jobRole}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select value={row.employee} onChange={event => handleEmployeeChange(event, index)}>
                  <option value="">Select Employee</option>
                  {employees.map((employee, index) => (
                    <option key={index} value={employee._id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input type="number" value={row.hourlyRate} onChange={event => handleHourlyRateChange(event, index)} />
              </td>
              <td>
                <input
                  type="number"
                  value={row.numberOfHours}
                  onChange={event => handleNumberOfHoursChange(event, index)}
                />
              </td>
              <td>{row.totalRate}</td>
              <td>
                <button type="button" onClick={() => handleRemoveRow(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleAddRow}>
        Add Row
      </button>
    </div>
  );
}

export default HRQuotationForm;
