const sample = {
  name: "Bui Ba Phuc",
  address: {
    street: "1314 East Franklin Avenue",
    area: "Minneapolis, MN 55404"
  },
  phone: "202-800-1210",
  email: "grandmalucy@email.net",
  dob: "DEC 28 1940",
  yearold: 72,
  bloodType: 'O-',
  code: 'JTTO331613'
}

const allergy1 = {
  type: "Severe",
  name: "Shellfish",
  description: "anaphylactic shock"
}
const allergy2 = {
  type: "",
  name: "Ketoconazole",
  description: "dermatitis"
}

const event1 = {
  conditionName: "Ankle Sprain",
  date: "November 18, 2012",
  detail: {
    description: "Slipped on ice and fell.",
    encounters: "Example Encounter 03/31/2005",
    labs: "Example Lab 09/14/2007",
    medications: "Example Medication"
  }
}
const event2 = {
  conditionName: "Arthritis",
  date: "October 31, 2007",
  detail: {
    description: "Slipped on ice and fell.",
    encounters: "Example Encounter 03/31/2005",
    labs: "Example Lab 09/14/2007",
    medications: "Example Medication"
  }
}

const event3 = {
  conditionName: "Cholecystitis",
  date: "October 31, 2007",
  detail: {
    description: "Slipped on ice and fell.",
    encounters: "Example Encounter 03/31/2005",
    labs: "Example Lab 09/14/2007",
    medications: "Example Medication"
  }
}

const labs = {
  labName: "Fasting Blood Glucose",
  date: "two days ago",
  trending_analysis: "You are trending toward decreased fasting blood sugar measurements, and your current result is well within normal range.",
  labs_detail: "Ordered by Dr. Sean Daley, North Memorial Medical Center. ovember 30, 2012 — 1:42pm",
  physician_notes: "Continue to exercise 3x/week.",
  about: "A lab glucose test measures the amount of glucose sugar in your blood.  This test measures after you’ve been fasting for at least eight hours.  It’s often the first check for prediabetes or diabetes."
}

const meds = [
  {
    name: "Prescribed Medication (Pill)",
    type: "prescribed",
    medication: "Excedrin",
    dose: "600mg",
    instructions: "Take two pills, two times per day",
    prescribed_date: "Oct 14, 2012",
    refill: 5
  },
  {
    name: "Durable Medical",
    type: "durable",
    medication: "CPAP Machine ",
    dose: "Use 10cm H2O nightly.",
    instructions: "Take two pills, two times per day",
    prescribed_date: "Nov 5, 2006",
    refill: "N/A"
  }
]

const encounter = {
  date: "June 22, 2012",
  type: "Office Visit",
  place: "Blaisdell Manor Health Services",
  goal: "Routine general medical examination at a health care facility, Screening for diabetes mellitus with lab glucose, Screening for ischemic heart disease ",
  outcomes: "Prescribed Ketoconzole, which was later found to cause a dermititis allergic reaction. Will follow up with lab results.",
  next_steps: "Call if you begin feeling burning sensations."
}
const encounter2 = {
  date: "August 14, 2011",
  type: "Emergency Room",
  place: "UCSF Medical Center",
  goal: "Patient presenting severe abdomen pain, Perform lab urinalysis, Perform complete blood count lab, Perform axial CT abdomen with IV contrast, Perform axial CT pelvis with IV contrast, Prepare emergency center draw and hold blood sample ",
  outcomes: "Epiploic appendices inflamed and self-limiting. Reactive scattered subcentimeter mesenteric lymph nodes. No major concerns. No adverse reaction to oral or 100 mL Optiray IV contrast. Prescribing pain medication. Return if condition worsens.",
  next_steps: null
}
const encounter3 = {
  date: "May 15, 2004",
  type: "Emergency Room",
  place: "Hennepin County Medical Center",
  goal: "Patient arrived via ambulance, in shock and stablized after eating shellfish with adverse reaction",
  outcomes: "Stabilized in emergency room with Ana-Kit and histamine blocker in ER. Adverse reaction to shellfish noted in allergies.",
  next_steps: null
}

const encounter4 = {
  date: "June 27, 1971",
  type: "Surgical Inpatient",
  place: "Burnett Medical Center",
  goal: "Labor and delivery by Cesarian section",
  outcomes: "Refer to send-home literature and return for postnatal checkup.",
  next_steps: null
}

const medrec = {
  bio: sample,
  allergies: [allergy1, allergy2],
  conditions: [event1, event2, event3],
  labs: labs,
  meds: meds,
  encounters: [encounter, encounter2, encounter3, encounter4]
}

export default medrec