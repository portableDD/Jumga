let request = require('request');


export const createSub = (email, name, contact, country, account_number, bankCode, address) => {
    let value = null;
    let options = {
        'method': 'POST',
        'url': 'https://api.flutterwave.com/v3/subaccounts',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer FLWSECK_TEST-ef48edeb7e2176093ae342737c08f8a8-X'
        },
        body: JSON.stringify({
          "account_bank": bankCode,
          "account_number": account_number,
          "business_name": name,
          "business_email": email,
          "business_contact": address,
          "business_contact_mobile": contact,
          "business_mobile": contact,
          "country": country,
          "meta":[{"meta_name":"mem_adr",
                   "meta_value":"0x16241F327213"
                  }],
          "split_type":"percentage",
          "split_value": 0.1
        })
      
      };
      value = request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
         return response.body.data.subaccount_id
      });
      console.log(value) 
      return value;
}

