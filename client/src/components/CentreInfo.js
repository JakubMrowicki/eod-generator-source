import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function date() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    return `${year}-${month}-${day}`;
}

export default function CentreInfo() {
    const { updateCentre, booths } = useContext(GlobalContext);
    const [ centreInfo, setCentreInfo ] = useState({
        location: 'Santry',
        vo: '',
        vocount: 1,
        date: date(),
        bags: {
            green: 0,
            blue: 1
        },
        dxlabel: '',
        dxseal: '',
        lip: 0,
        apdirect: 0,
        resubs: 0,
        details: ''
    });

    useEffect(() => {
        updateCentre(centreInfo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [centreInfo]);

    const [disable, setDisable] = useState(false);

    const [total, setTotal] = useState({
        credit: 0,
        debit: 0,
        payzone: 0,
        mobile: 0,
        cardmachine: 0,
        diff: 0
    });

    useEffect(() => {
        var calc = {
            credit: 0,
            debit: 0,
            payzone: 0,
            mobile: 0,
            cardmachine: 0,
            diff: 0
        };
        for (var booth in booths) {
            calc.credit += booths[booth].credit;
            calc.debit += booths[booth].debit;
            calc.payzone += booths[booth].payzone;
            calc.mobile += booths[booth].mobile;
            calc.cardmachine += booths[booth].cardmachine;
            calc.diff += booths[booth].diff;
        }
        setTotal(calc);
    }, [booths]);
    
    return (
        <>
        <div className="card shadow mb-3">
            <div className="card-header">
                <h5>Centre Info</h5>
            </div>
            <div className="card-body">
                <p>Set centre name, date and booth count.</p>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-5">
                            <label>Centre Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="eg. Santry"
                                value={centreInfo.location}
                                onChange={({target}) => {
                                    const val = target.value;
                                    setCentreInfo(prevState => {
                                      return { ...prevState, location: val }
                                    });
                                  }}
                            />
                        </div>
                        <div className="col-4">
                            <label title="Your name">VO Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="eg. Jakub"
                                value={centreInfo.vo}
                                onChange={({target}) => {
                                    const val = target.value;
                                    setCentreInfo(prevState => {
                                      return { ...prevState, vo: val }
                                    });
                                  }}
                            />
                        </div>
                        <div className="col-3">
                            <label>VO Count</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                min="1" 
                                value={centreInfo.vocount}
                                disabled={disable}
                                onChange={({target}) => {
                                    const val = target.value;
                                    setCentreInfo(prevState => {
                                      return { ...prevState, vocount: +val }
                                    });
                                    if (val > 1) {
                                        setDisable(true);
                                    }
                                  }}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Report Date</label>
                    <input 
                        type="date" 
                        className="form-control"
                        value={centreInfo.date} 
                        onChange={({target}) => {
                            const val = target.value;
                            setCentreInfo(prevState => {
                              return { ...prevState, date: val }
                            });
                          }}
                    />
                </div>
                <hr />
                <div className="mb-3">
                    <div className="row">
                        <div className="col-6">
                            <label>Green Bags</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                min="0" 
                                value={centreInfo.bags.green}
                                onChange={({target}) => {
                                    const val = target.value;
                                    setCentreInfo(prevState => {
                                      return { ...prevState, bags: {...prevState.bags, green: val} }
                                    });
                                  }}
                                 />
                        </div>
                        <div className="col-6">
                            <label>Blue Bags</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                min="0" 
                                value={centreInfo.bags.blue} 
                                onChange={({target}) => {
                                    const val = target.value;
                                    setCentreInfo(prevState => {
                                      return { ...prevState, bags: {...prevState.bags, blue: val} }
                                    });
                                  }}
                                />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label>DX Label Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="eg. 13100101584507"
                        value={centreInfo.dxlabel} 
                        onChange={({target}) => {
                            const val = target.value;
                            setCentreInfo(prevState => {
                              return { ...prevState, dxlabel: val }
                            });
                          }}
                    />
                </div>
                <div className="mb-3">
                    <label>DX Seal Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="eg. 7912350"
                        value={centreInfo.dxseal} 
                        onChange={({target}) => {
                            const val = target.value;
                            setCentreInfo(prevState => {
                              return { ...prevState, dxseal: val }
                            });
                          }}
                    />
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-4">
                            <label title="Lost in post total">LIP Total</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="no" 
                                value={centreInfo.lip} 
                                onChange={({target}) => {
                                    const val = target.value;
                                    setCentreInfo(prevState => {
                                      return { ...prevState, lip: val }
                                    });
                                  }}
                            />
                        </div>
                        <div className="col-4">
                            <label>AP Direct Total</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                value={centreInfo.apdirect} 
                                onChange={({target}) => {
                                    const val = target.value;
                                    setCentreInfo(prevState => {
                                      return { ...prevState, apdirect: val }
                                    });
                                  }}
                            />
                        </div>
                        <div className="col-4">
                            <label title="Resubmissions Total">Resub Total</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                value={centreInfo.resubs} 
                                onChange={({target}) => {
                                    const val = target.value;
                                    setCentreInfo(prevState => {
                                      return { ...prevState, resubs: val }
                                    });
                                  }}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Payment Discrepancy Details</label>
                    <textarea 
                        cols="30" 
                        rows="10" 
                        className="form-control" 
                        placeholder="eg. -€20 EXP2 on card machine"
                        value={centreInfo.details}
                        onChange={({target}) => {
                            const val = target.value;
                            setCentreInfo(prevState => {
                              return { ...prevState, details: val }
                            });
                          }}
                    ></textarea>
                </div>
            </div>
        </div>
        <div className="card shadow mb-3 sticky-top">
            <div className="card-header">
                <h5>Running Totals</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6 border-end">
                        <p>Credit Card: €{total.credit}</p>
                        <p>Debit Card: €{total.debit}</p>
                        <hr />
                        <p>Total(Minus EXP): €{(total.credit + total.debit) - total.diff}</p>
                        <p>Card Machine: €{total.cardmachine}</p>
                    </div>
                    <div className="col-6">
                        <p>Payzone: €{total.payzone}</p>
                        <p>Mobile Payments: €{total.mobile}</p>
                        <p>EXP Difference: €{total.diff}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}