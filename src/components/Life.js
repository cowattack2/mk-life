import React from 'react';

const rowNum = 100;
const colNum = 100;

const Life = () => {
    const rows = [];

    for (let i = 0; i < rowNum; i++) {
        rows.push(Array.from(Array(colNum), () => 0));
    }

    //return rows;
};

export default Life;