import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
// import axios from 'axios';

const RoleTable = () => {
  const [roles, setRoles] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // Appel à l'API pour récupérer les données des rôles
    // axios.get('api/roles')
    //   .then((response:any) => {
    //     setRoles(response.data);
    //   })
    //   .catch((error:any) => {
    //     console.error(error);
    //   });
  }, []);

  const handleSearch = (event:any) => {
    setSearchValue(event.target.value);
  };

  const filteredRoles = roles.filter((role:any) =>
    role.name.toLowerCase().includes(searchValue.toLowerCase())
    || role.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns = [
    {
      name: 'ID',
      selector: (row:any)=>row.id,
      sortable: true,
    },

    {
      name: 'Actions',
      cell: (row:any) => (
        <div>
          {/* Ajoutez ici vos boutons d'action, par exemple : */}
          <button onClick={() => null}>Modifier</button>
          <button onClick={() => null}>Supprimer</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Recherche..."
        value={searchValue}
        onChange={handleSearch}
      />
      <DataTable
        columns={columns}
        data={filteredRoles}
        pagination
        highlightOnHover
        striped
        responsive
        dense
      />
    </div>
  );
};

export default RoleTable;
