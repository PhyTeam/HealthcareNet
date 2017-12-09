import React, { Component } from 'react'

class BioVitual extends Component {
	render() {
		const sample = this.props.value;

		return (
			<div>
			<section className="name">
		        <div className="row" id="tour-patient-name">
		            <div className="twelve columns">
		                <h1 id="patient-name">{sample.name}</h1>
		            </div>
		        </div>
		    </section>
			<section className="bio" id="bio">
		        <div className="row">
		            <div className="five columns">
		                <div className="panel patient-contact">
		                    <address id="tour-responsive">
		                        {sample.address.street}<br />
		                        {sample.address.area}
		                    </address>
		                    <p>
		                        {sample.phone}<br />
		                        <a href="#">{sample.email}</a>
		                    </p>
		                </div>
		            </div>
		            <div className="three columns" id="tour-patient-bio">
		                <div className="panel patient-proprietary">
		                    <img src="images/fpo-barcode.png" alt="Barcode" className="barcode" />
		                    <p>JTTO331613</p>
		                    <p>{sample.dob}</p>
		                </div>
		            </div>
		            <div className="two columns">
		                <div className="panel tile-bignumber" id="tour-health-boxes">
		                    <h2>{95}</h2>
		                    <p>Tuổi</p>
		                </div>
		            </div>
		            <div className="two columns">
		                <div className="panel tile-bignumber">
		                    <h2>{sample.bloodType}</h2>
		                    <p>Loại máu</p>
		                </div>
		            </div>
		        </div>
    		</section>
    		</div>
		);
	}
}

class Allergies extends Component {
	render() {
		const sample = this.props.value
		const sampleList = sample.map((allergy, i) => {
			return (
				<li className="alert" key={i}>
                    <a className="line-item">
                        {allergy.name}
                        <small className="reaction"> {allergy.description}</small>
                    </a>
                </li>
                )
		})

		return (
		    <section className="allergies" id="allergies">
		        <div className="row">
		            <div className="headline two columns">
		                <div className="panel">
		                    <h2 id="tour-allergies">Dị ứng: </h2>
		                </div>
		            </div>
		            <div className="listing ten columns lines">
		                <div className="content panel">
		                    <ul>
		                       {sampleList}
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </section>
		)}
}

class Conditions extends Component {

	render() {
		const sample = this.props.value
		const eventList = sample.map((event,i) => {
			return (
					<div className="timeline-event resolved" key={i}>
	                    <div className="timeline-rail">
	                        <span className="timeline-indicator" style={{left: 23 + '%'}}></span>
	                    </div>
	                    <a href="#" className="summary">
	                        <h3>{event.event_name}</h3>
	                        <h4>{event.date}</h4>
	                    </a>
	                    <div className="detail iconed">
	                        <p>{event.detail.description}</p>
	                        <p><strong>Associated Encounters: </strong> <a href="#encounters">{event.detail.encounters}</a></p>
	                        <p><strong>Associated Labs: </strong> {event.detail.labs}</p>
	                        <p><strong>Thuốc điền trị liên quan: </strong> {event.detail.medications}</p>
	                    </div>
	                </div>
	            )
		})
		return (
		    <section className="conditions" id="conditions">
		        <div className="row">
		            <div className="headline two columns">
		                <div className="panel">
		                    <h2 id="tour-conditions">Conditions</h2>
		                </div>
		            </div>

		            <div className="timeline ten column">
		                <div className="timeline-years">
		                    <ul>
		                        <li>1984</li>
		                        <li>1986</li>
		                        <li>1988</li>
		                        <li>1990</li>
		                        <li>1992</li>
		                        <li>1994</li>
		                        <li>1996</li>
		                        <li>1998</li>
		                        <li>2000</li>
		                        <li>2002</li>
		                        <li>2004</li>
		                        <li>2006</li>
		                        <li>2008</li>
		                        <li>2010</li>
		                    </ul>
		                </div>

		                {eventList}
		            </div>
		        </div>
		    </section>
		)
	}
}

class Labs extends Component {

	renderLabResult(lab) {
		const sample = lab
		return (
			    <div className="panel content lab-result closed">
                    <h3>{sample.labName} <small>{sample.date}</small></h3>
                    <div className="graph-horizontal graph-horizontal-fbs">
                        <div className="graph-horizontal-labels">
                            <ul>
                                <li style={{width: 34 +'%'}}><strong>Normal</strong>: Fasting blood sugar in this range is normal.</li>
                                <li style={{width: 23 +'%' }}><strong>Elevated</strong>: Fasting blood sugar in the range of 101-125 mg/dL is a cause of concern for possible prediabetes and should be monitored.</li>
                                <li style={{width: 43 +'%' }}><strong>High</strong>: Fasting blood sugar above 126 mg/dL is an indicator of possible established diabetes.</li>
                            </ul>
                        </div>
                        <span className="graph-horizontal-marker" style={{left: 24 +'%'}}>
                            <span className="graph-result-label"><strong>84</strong> mg/dL</span>
                        </span>
                        <span className="graph-horizontal-previous graph-horizontal-previous-1" style={{left: 31+'%'}}></span>
                        <span className="graph-horizontal-previous graph-horizontal-previous-2" style={{left: 39+'%'}}></span>
                        <span className="graph-horizontal-previous graph-horizontal-previous-3" style={{left: 44+'%'}}></span>
                    </div>
                    <div className="row">
                        <div className="three columns">
                            <div className="panel">
                                <h4>Trending analysis</h4>
                            </div>
                        </div>
                        <div className="nine columns">
                            <div className="panel">
                                <p>{sample.trending_analysis}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="three columns">
                            <div className="panel">
                                <h4>Lab details</h4>
                            </div>
                        </div>
                        <div className="nine columns">
                            <div className="panel">
                                <p>
                                    {sample.labs_detail}<br />
                                    November 30, 2012 — 1:42pm (<a href="#encounter-9faa1792-928d-40a5-8878-b24d408136e9">view encounter</a>)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="three columns">
                            <div className="panel">
                                <h4>Physician notes</h4>
                            </div>
                        </div>
                        <div className="nine columns">
                            <div className="panel">
                                <p className="highlight padded">
                                    {sample.physician_notes}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="three columns">
                            <div className="panel">
                                <h4>About this test</h4>
                            </div>
                        </div>
                        <div className="nine columns">
                            <div className="panel">
                                <p>
                                   	{sample.about}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
		)
	}

	render() {
		const lab1 = this.renderLabResult(this.props.value)
		return (
		<section className="labs" id="labs">
        <div className="row">
            <div className="headline two columns">
                <div className="panel">
                    <h2 id="tour-labs">Labs</h2>
                </div>
            </div>

            <div className="content-container ten columns">
                {lab1}
            </div>

        </div>
    </section>
		)
	}
}

class Meds extends Component {
	renderMedication(med, key) {
		return (
			<div className="six column medication-single" key={key}>
		                        <div className="panel">
		                            <div className={"medication-category " + med.type}>{med.name}</div>
		                            <div className="medication-detail">
		                                <div className="medication-rx">
		                                    <h4>{med.medication} <small>{med.dose}</small></h4>
		                                    <p className="instructions">{med.instructions}</p>
		                                    <div className="meta" id="tour-meds">
		                                        <div className="meta-date">
		                                            <small>Prescribed</small> {med.prescribed_date}
		                                        </div>
		                                        <div className="meta-refills">
		                                            <small>Refills Left</small> {med.refill}
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="medication-illustration">
		                                    <div className="single-day">
		                                        <div className="day">Sun</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                            <span className="pill"></span> |
		                                            <span className="pill"></span>
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Mon</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                            <span className="pill"></span> |
		                                            <span className="pill"></span>
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Tue</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                            <span className="pill"></span> |
		                                            <span className="pill"></span>
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Wed</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                            <span className="pill"></span> |
		                                            <span className="pill"></span>
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Thu</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                            <span className="pill"></span> |
		                                            <span className="pill"></span>
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Fri</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                            <span className="pill"></span> |
		                                            <span className="pill"></span>
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Sat</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                            <span className="pill"></span> |
		                                            <span className="pill"></span>
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="clearfix"></div>
		                            </div>
		                        </div>
		                    </div>
		)
	}
	render() {
		const medications = this.props.value

		const med = medications.map((m, key) => {
			return this.renderMedication(m, key)
		})

		return (
			    <section className="medications" id="medications">
		        <div className="row">
		            <div className="headline two columns">
		                <div className="panel">
		                    <h2>Meds</h2>
		                </div>
		            </div>

		            <div className="double ten column content">
		                <div className="panel content-inner">
		                    {med}
		                    <div className="six column medication-single">
		                        <div className="panel">
		                            <div className="medication-category prescribed">Prescribed Medication (Pill)</div>
		                            <div className="medication-detail">
		                                <div className="medication-rx">
		                                    <h4>Baclofen <small>10mg tab</small></h4>
		                                    <p className="instructions">Take one tablet once per day.</p>
		                                    <div className="meta">
		                                        <div className="meta-date">
		                                            <small>Prescribed</small> Apr 15, 2004
		                                        </div>
		                                        <div className="meta-refills alert bg">
		                                            <small>Refills Left</small>
		                                            1
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="medication-illustration">
		                                    <div className="single-day">
		                                        <div className="day">Sun</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Mon</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Tue</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Wed</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Thu</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Fri</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                    <div className="single-day">
		                                        <div className="day">Sat</div>
		                                        <div className="illus">
		                                            <span className="pill"></span>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="clearfix"></div>
		                            </div>
		                        </div>
		                    </div>

		                    <div className="six column medication-single">
		                        <div className="panel">
		                            <div className="medication-category discontinued">Discontinued Medication Shampoo</div>
		                            <div className="medication-detail">
		                                <div className="medication-rx">
		                                    <h4><span className="strike">Ketoconazole</span></h4>
		                                    <p className="instructions"><span className="strike">Use in shower one time per day</span></p>
		                                    <div className="meta">
		                                        <div className="meta-date">
		                                            <small>Prescribed</small> Jul 9, 2012
		                                        </div>
		                                        <div className="meta-refills alert bg">
		                                            <small>Refills Left</small>
		                                            None
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="medication-illustration discontinued">
		                                    <p>Medication discontinued<br /><br />
		                                        <strong>Allergy</strong></p>
		                                </div>
		                                <div className="clearfix"></div>
		                            </div>
		                        </div>
		                    </div>


		                </div>
		            </div>
		        </div>
		    </section>
		)
	}
}

class Encounters extends Component {
	renderEncounter(encounter, index) {
		return (
	        <tr key={index}>
	            <td id="tour-encounters">{encounter.date}</td>
	            <td>{encounter.type}</td>
	            <td>
	                <strong>{encounter.place}: </strong> {encounter.goal}
	            </td>
	            <td>
	                {encounter.outcomes}<br /><br />
	                {encounter.next_steps != null && <div className="next-steps"><strong>Your Next Steps:</strong> {encounter.next_steps}</div>}
	            </td>
	        </tr>
		)
	}
	render() {
		const encounters = this.props.value
		const encountertList = encounters.map((e, i) => {return this.renderEncounter(e, i)})

		return (
			<section className="encounters" id="encounters">
		        <div className="row">
		            <div className="headline two columns">
		                <div className="panel">
		                    <h2>Encounters</h2>
		                </div>
		            </div>

		            <div className="table ten column content">
		                <div className="panel">

		                    <table>
		                        <thead>
		                            <tr>
		                                <td className="table-date">Date</td>
		                                <td className="table-type">Visit Type</td>
		                                <td className="table-goals">Goals</td>
		                                <td className="table-outcomes">Outcomes and Next Steps</td>
		                            </tr>
		                        </thead>
		                        <tbody>
		                        	{encountertList}
		                        </tbody>
		                    </table>
		                </div>

		            </div>
		        </div>
		    </section>
		)
	}
}
module.exports = {
  BioVitual,
  Allergies,
  Conditions,
  Labs,
  Meds,
  Encounters
}
