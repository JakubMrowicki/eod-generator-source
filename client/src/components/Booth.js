import React, { useEffect, useState } from 'react';

export default function Booth(props) {
    const [vo, setVo] = useState({
        name: '',
        booth: '',
        credit: 0,
        debit: 0,
        payzone: 0,
        mobile: 0,
        cardmachine: 0,
        exp1: 0,
        exp2: 0,
        diff: 0
    });

    useEffect(() => {
        props.handleUpdate(vo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vo]);

    var cardMatch = '';
    if (vo.credit + vo.debit !== vo.cardmachine && vo.cardmachine) {
        var difference = Math.abs((vo.credit + vo.debit) - vo.cardmachine);
        if (difference === vo.diff) {
            cardMatch = <p className="text-success">Card payments match.</p>;
        } else {
            cardMatch = <p className="text-danger">Card payment mismatch(Account for €{difference}).</p>;
        }
    } else if (vo.credit + vo.debit === vo.cardmachine && vo.cardmachine) {
        cardMatch = <p className="text-success">Card payments match.</p>;
    }
    return (
        <div className="card shadow mb-3">
            <div className="card-header">
                <h5>Report for VO {props.number}</h5>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <div className="row">
                        <div className="col-6">
                            <div className="input-group">
                                <span className="input-group-text">VO</span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="eg. Jakub" 
                                    value={vo.name}
                                    onChange={({target}) => {
                                        const val = target.value;
                                        setVo(prevState => {
                                            return { ...prevState, name: val }
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group">
                                <span className="input-group-text">Booth</span>
                                <input 
                                    type="number" 
                                    min="1" 
                                    max="10" 
                                    placeholder="eg. 1" 
                                    className="form-control" 
                                    value={vo.booth}
                                    onChange={({target}) => {
                                        const val = target.value;
                                        setVo(prevState => {
                                            if (val === '') {
                                                return { ...prevState, booth: val };
                                            } else {
                                                return { ...prevState, booth: +val };
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="mb-3">
                    <div className="row">
                        <div className="col-6 border-end">
                            <p>Payments</p>
                            <label>Credit Card</label>
                            <div className="input-group">
                                <span className="input-group-text">€</span>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    placeholder="Credit Card total from FO"
                                    value={vo.credit}
                                    onChange={({target}) => {
                                        const val = target.value;
                                        setVo(prevState => {
                                            if (val === '') {
                                                return { ...prevState, credit: val };
                                            } else {
                                                return { ...prevState, credit: +val };
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <label>Debit Card</label>
                            <div className="input-group">
                                <span className="input-group-text">€</span>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Debit Card total from FO"
                                    value={vo.debit}
                                    onChange={({target}) => {
                                        const val = target.value;
                                        setVo(prevState => {
                                            if (val === '') {
                                                return { ...prevState, debit: val };
                                            } else {
                                                return { ...prevState, debit: +val };
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <label>Payzone</label>
                            <div className="input-group">
                                <span className="input-group-text">€</span>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    placeholder="Payzone total from FO"
                                    value={vo.payzone}
                                    onChange={({target}) => {
                                        const val = target.value;
                                        setVo(prevState => {
                                            if (val === '') {
                                                return { ...prevState, payzone: val };
                                            } else {
                                                return { ...prevState, payzone: +val };
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <label>Mobile Payment</label>
                            <div className="input-group">
                                <span className="input-group-text">€</span>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    placeholder="Mobile Payment total from FO"
                                    value={vo.mobile}
                                    onChange={({target}) => {
                                        const val = target.value;
                                        setVo(prevState => {
                                            if (val === '') {
                                                return { ...prevState, mobile: val };
                                            } else {
                                                return { ...prevState, mobile: +val };
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <label>Card Machine</label>
                            <div className="input-group">
                                <span className="input-group-text">€</span>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    placeholder="Card Machine total from batch"
                                    value={vo.cardmachine}
                                    onChange={({target}) => {
                                        const val = target.value;
                                        setVo(prevState => {
                                            if (val === '') {
                                                return { ...prevState, cardmachine: val };
                                            } else {
                                                return { ...prevState, cardmachine: +val };
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <p>Exceptions</p>
                            <label>EXP 1</label>
                            <input 
                                type="number" 
                                className="form-control"
                                value={vo.exp1}
                                onChange={({target}) => {
                                    const val = target.value;
                                    setVo(prevState => {
                                        if (val === '') {
                                            return { ...prevState, exp1: val };
                                        } else {
                                            return { ...prevState, exp1: +val };
                                        }
                                    });
                                }}
                            />
                            <label>EXP 2</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                value={vo.exp2}
                                onChange={({target}) => {
                                    const val = target.value;
                                    setVo(prevState => {
                                        if (val === '') {
                                            return { ...prevState, exp2: val };
                                        } else {
                                            return { ...prevState, exp2: +val };
                                        }
                                    });
                                }}
                            />
                            <label>EXP Difference</label>
                            <div className="input-group">
                                <span className="input-group-text">€</span>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    value={vo.diff}
                                    onChange={({target}) => {
                                        const val = target.value;
                                        setVo(prevState => {
                                            if (val === '') {
                                                return { ...prevState, diff: val };
                                            } else {
                                                return { ...prevState, diff: +val };
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {cardMatch}
            </div>
        </div>
    );
}