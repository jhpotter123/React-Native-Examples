export default {
	// Bank account settings by country
	DOB: '',
	DOB_PLACEHOLDER: '',
	DOB_US_PLACEHOLDER: 'Date of Birth (MM/DD/YYYY)',
	DOB_INTL_PLACEHOLDER: 'Date of Birth (DD/MM/YYYY)',
	DOB_MASK: '?9?9/?9?9/?9?9?9?9',
	SSN: '',
	SSN_PLACEHOLDER: 'Social Security Number',
	SSN_MASK: '?9?9?9-?9?9-?9?9?9?9',

	PARM1: null,
	PARM1_PLACEHOLDER: null,
	PARM1_MASK: null,
	PARM2: null,
	PARM2_PLACEHOLDER: null,
	PARM2_MASK: null,
	PARM3: null,
	PARM3_PLACEHOLDER: null,
	PARM3_MASK: null,
	PARM4: null,
	PARM4_PLACEHOLDER: null,
	PARM4_MASK: null,

	// Australia BSB or routing field.
	AU: {
		BSB: "",
		BSB_PLACEHOLDER: "BSB",
		BSB_MASK: '?9?9?9?9?9?9',
		ACCT_NUMBER: "",
		ACCT_NUMBER_PLACEHOLDER: "Account Number",
		ACCT_NUMBER_MASK: '?9?9?9?9?9?9?9?9'
	},
	CA: {
		TRANSIT_NUMBER: "",
		TRANSIT_NUMBER_PLACEHOLDER: "Transit Number",
		TRANSIT_NUMBER_MASK: "?9?9?9?9?9",
		INSTITUTION_NUMBER: "",
		INSTITUTION_NUMBER_PLACEHOLDER: "Institution Number",
		INSTITUTION_NUMBER_MASK: "?9?9?9",
		ACCT_NUMBER: "",
		ACCT_NUMBER_PLACEHOLDER: "Account Number",
		ACCT_NUMBER_MASK: '?9?9?9?9?9?9?9?9?9?9?9?9'
	},
	HK: {
		CLEARING_CODE: "",
		CLEARING_CODE_PLACEHOLDER: "Clearing Code",
		CLEARING_CODE_MASK: "?9?9?9",
		BRANCH_CODE: "",
		BRANCH_CODE_PLACEHOLDER: "Branch Code",
		BRANCH_CODE_MASK: "?9?9?9",
		ACCT_NUMBER: "",
		ACCT_NUMBER_PLACEHOLDER: "Account Number",
		ACCT_NUMBER_5_MASK: '?9?9?9?9?9-?9?9?9',
		ACCT_NUMBER_6_MASK: '?9?9?9?9?9?9-?9?9?9'
	},
	JP: {
		BANK_CODE: "",
		BANK_CODE_PLACEHOLDER: "Bank Code",
		BANK_CODE_MASK: '?9?9?9?9',
		BRANCH_CODE: "",
		BRANCH_CODE_PLACEHOLDER: "Branch Code",
		BRANCH_CODE_MASK: '?9?9?9',
		ACCT_NUMBER: "",
		ACCT_NUMBER_PLACEHOLDER: "Account Number",
		ACCT_NUMBER_MASK: '?9?9?9?9?9?9?9?9',
		ACCT_OWNER_NAME: "",
		ACCT_OWNER_NAME_PLACEHOLDER: "Account Owner Name"
	},
	NZ: {
		ROUTE_NUMBER: "Routing Number",
		ROUTE_NUMBER_PLACEHOLDER: "Routing Number",
		ROUTE_NUMBER_MASK: '?9?9?9?9?9?9',
		ACCT_NUMBER: "",
		ACCT_NUMBER_PLACEHOLDER: "Account Number",
		ACCT_NUMBER_MASK: '?9?9?9?9?9?9?9?9?9?9'
	},
	SG: {
		BANK_CODE: "",
		BANK_CODE_PLACEHOLDER: "Bank Code",
		BANK_CODE_MASK: '?9?9?9?9',
		BRANCH_CODE: "",
		BRANCH_CODE_PLACEHOLDER: "Branch Code",
		BRANCH_CODE_MASK: '?9?9?9',
		ACCT_NUMBER: "",
		ACCT_NUMBER_PLACEHOLDER: "Account Number",
		ACCT_NUMBER_MASK: '?9?9?9?9?9?9?9?9?9?9?9?9'
	},
	US: {
		ROUTE_NUMBER: "Routing Number",
		ROUTE_NUMBER_PLACEHOLDER: "Routing Number",
		ROUTE_NUMBER_MASK: '?9?9?9?9?9?9?9?9?9',
		ACCT_NUMBER: "",
		ACCT_NUMBER_PLACEHOLDER: "Account Number",
		ACCT_NUMBER_MASK: '?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9?9'
	},
	GB: {
		SORT_NUMBER: "",
		SORT_NUMBER_PLACEHOLDER: "Sort Code",
		SORT_NUMBER_MASK: '?9?9-?9?9-?9?9',
		ACCT_NUMBER: "",
		ACCT_NUMBER_PLACEHOLDER: "Account Number",
		ACCT_NUMBER_MASK: '?9?9?9?9?9?9?9?9'
	},

	// All of the EU countries require a single IBAN input by the user passed into account_number 
	// on the back end.

	// The IBAN consists of up to 34 alphanumeric characters, as follows: country code 
	// using ISO 3166-1 alpha-2 – two letters, check digits – two digits, and.  
	// Basic Bank Account Number (BBAN) – up to 30 alphanumeric characters that 
	// are country-specific.

	EU: {
		IBAN_NUMBER: "",
		IBAN_NUMBER_PLACEHOLDER: "IBAN",
		IBAN_NUMBER_MASK: 'AA99?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A?A',
	}
};
