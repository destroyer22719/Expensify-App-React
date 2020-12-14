import moment from 'moment';

export const expensesData = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
  }, 
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 2000,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  }, 
  {
    id: '3',
    description: 'Water Bill',
    note: '',
    amount: 5000,
    createdAt: moment(0).add(4, 'days').valueOf(),
  }
];