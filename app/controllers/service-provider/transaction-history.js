import Ember from 'ember';
export default Ember.Controller.extend({
    columns: [{
            "propertyName": "CampaignName",
            "title": "Campaign Name",
            "filterPlaceholder": "Enter Name"
        },
        {
            "propertyName": "Start Date",
            "title": "Start Date",
            "filterPlaceholder": "Enter Start Date"
        },
        {
            "propertyName": "End Date",
            "title": "End date",
            "filterPlaceholder": "Enter End Date"
        },
        {
            "propertyName": "Goal Amount",
            "title": "Goal Amount",
            "filterPlaceholder": "Enter Goal Amount"
        },
        {
            "propertyName": "Funder Name",
            "title": "Funder Name",
            "filterPlaceholder": "Enter Funder Name"
        },
        {
            "propertyName": "Funder Contributer",
            "title": "Funder Contribution",
            "filterPlaceholder": "Enter Funder Contribution"
        },
        {
            "propertyName": "Fund Status",
            "title": "Fund Status. Service Provider / FundRaiser",
            "filterPlaceholder": "Enter Status"
        },       
    ],
}); 