//import React from 'react'

export default function EmpSal() {
    const empData = [
      { name: "Ramu", email: "ramu@gmail.com", company: "IBM", salary: 45000 },
      { name: "Raju", email: "raju@gmail.com", company: "HP", salary: 35000 },
      { name: "Ramya", email: "ramya@gmail.com", company: "InfoSys", salary: 25000 },
      { name: "John", email: "john@gmail.com", company: "Wipro", salary: 65000 },
      { name: "Abdul", email: "abdul@gmail.com", company: "TCS", salary: 55000 },
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">location</th>
              <th scope="col">country</th>
              <th scope="col">url</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.name}</td>
                    <td>{x.location}</td>
                    <td>{x.country}</td>
                    <td>{x.url}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }