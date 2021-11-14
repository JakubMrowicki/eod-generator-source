import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Booth from './Booth';

export default function Booths() {
    const {centre, booths, updateVo} = useContext(GlobalContext);
    const [showBooths, setShowBooths] = useState([]);
    // const [mailto, setMailto] = useState('mailto:ie.ops.agne@sgs.com,ie.finance.agne@sgs.com?subject=EOD%20Report%20CENTRE%20DATE');

    async function getFile1() {
        await fetch("/submit", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            centre: centre,
            booths: booths
          })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            window.open(`/download/${data.file}`, '_blank');
        });
    }

    async function getFile2() {
        await fetch("/submit2", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            centre: centre,
            booths: booths
          })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            window.open(`/download/${data.file}`, '_blank');
        });
    }

    useEffect(() => {
        var cur = [];
        for (let i = 0; i < centre.vocount; i++) {
            cur.push(<Booth 
                key={i} 
                number={i + 1}
                handleUpdate={handleUpdate} />);
        }
        setShowBooths(cur);

        //mailto
        // var [year, month, day] = centre.date.split("-");
        // var date = `${day}/${month}/${year}`;
        // setMailto(`mailto:ie.ops.agne@sgs.com,ie.finance.agne@sgs.com?subject=EOD%20Report%20${centre.location}%20${date}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [centre]);

    function handleUpdate(data) {
        updateVo(data);
    }
    
    return (
        <div>
            {showBooths}
            <div className="button-group float-end">
                <button 
                    className="btn btn-success shadow-lg mb-3"
                    onClick={getFile1}
                >
                    <i className="fas fa-cloud-download-alt me-1"> </i>
                    Get Report
                </button>
                <button 
                    className="btn btn-primary shadow-lg ms-2 mb-3"
                    onClick={getFile2}
                >
                    Get EOD Sheet
                </button>
            </div>
            
        </div>
    );
}