const apiKey = 'LCC_dCVSc3JMeAG88ZSeWbQPxIyn9RddpTfU3ZAZtz6yDbz7mhTokC_0j0TfCT9fdaM6ReSXjs9MPbfcnRJpCw1N3DQ0pGd_xlcxtx6Mh0kWxvvAXOCunHpOvNlYX3Yx';

// const Yelp = {

//     // Should this be async or not?
//     search(term, location, sortBy) {

//         return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
//                 headers: {
//                     Authorization: `Bearer ${apiKey}`
//                 }

//         }).then(response => {
//             return response.json();
            
//         }).then(jsonResponse => {
//             if(jsonResponse.businesses) {
//                 return jsonResponse.businesses.map(business => {
//                     return {
//                         id: business.id,
//                         imageSrc: business.image_url,
//                         name: business.name,
//                         address: business.location.address1,
//                         city: business.location.city,
//                         state: business.location.state,
//                         zipCode: business.location.zip_code,
//                         category: business.category.title,
//                         rating: business.rating,
//                         reviewCount: business.review_count 
//                     };
//                 });
//             } else {
//                 //Possibly wrong. Step 16. Maybe omit else clause?
//                 return;
//             }
//         });
//     }

// };

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };

export default Yelp;

