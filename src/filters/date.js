import moment from 'moment';

// Vue.filter('formatDate', function(value) {
//   if (value) {
//     return moment(String(value)).format('MM/DD/YYYY hh:mm')
//   }
//   return null;
// });


export default function formatDate(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm');
  }
  return null;
}
